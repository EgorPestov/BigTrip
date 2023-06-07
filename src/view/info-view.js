import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDateForEvent, mapIdToOffers } from '../utils/event.js';

function createTripInfoMainTemplate(events, destinations) {
  const firstDestination = destinations.find((dstntn) => dstntn.id === events[0].destination).name;
  const lastDestination = destinations.find((dstntn) => dstntn.id === events[events.length - 1].destination).name;
  function getMiddleDestination() {
    const middleDestinations = [];

    for (let i = 1; i < events.length - 1; i++) {
      const middleDstntn = destinations.find(
        (dstntn) => dstntn.id === events[i].destination
      ).name;
      middleDestinations.push(middleDstntn);
    }

    if (middleDestinations.every((md) => md === firstDestination)) {
      return '&mdash;';
    } else if (middleDestinations.every((md) => md === lastDestination)) {
      return '&mdash;';
    } else if (middleDestinations.every((md, i, arr) => md === arr[0])) {
      return `&mdash; ${middleDestinations[0]} &mdash;`;
    } else {
      return '...';
    }
  }

  const firstDate = humanizeDateForEvent(events[0].dateFrom);
  const lastDate = humanizeDateForEvent(events[0].dateTo); // ! у этой функции НУЖНО СДЕЛАТЬ проверку: если месяц совпадает, то не показывать его
  return `<div class="trip-info__main">
            <h1 class="trip-info__title">${firstDestination} ${getMiddleDestination()} ${lastDestination}</h1>

            <p class="trip-info__dates">${firstDate}&nbsp;&mdash;&nbsp;${lastDate}</p>
          </div>`;
}

function createTripInfoCostTemplate(events, offers) {
  const sumBasePrice = (objects) => {
    let sum = 0;
    for (let i = 0; i < objects.length; i++) {
      sum += objects[i].basePrice;
    }
    return sum;
  };

  const allIncludedOffers = [];
  for (let i = 0; i < events.length; i++) {
    const offersForEvent = mapIdToOffers(offers, events[i].offers, events[i].type);
    allIncludedOffers.push(...offersForEvent);
  }

  const sumIncludedOffersPrice = (objects) => {
    let sum = 0;
    for (let i = 0; i < objects.length; i++) {
      sum += objects[i].price;
    }
    return sum;
  };

  const price = sumBasePrice(events) + sumIncludedOffersPrice(allIncludedOffers);

  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
          </p>`;
}

function createTripInfoTemplate(events, destinations, offers) {
  return /*HTML*/ `
    <section class="trip-main__trip-info  trip-info">
      ${createTripInfoMainTemplate(events, destinations)}
      ${createTripInfoCostTemplate(events, offers)}
    </section>`;
}

export default class InfoView extends AbstractView {
  #events = null;
  #destinations = null;
  #offers = null;

  constructor({events, destinations, offers}) {
    super();
    this.#events = events;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createTripInfoTemplate(this.#events, this.#destinations, this.#offers);
  }
}
