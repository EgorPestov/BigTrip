import AbstractView from '../framework/view/abstract-view.js';

function createTripInfoMainTemplate() {
  return `<div class="trip-info__main">
            <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

            <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
          </div>`;
}

function createTripInfoCostTemplate() {
  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
          </p>`;
}

function createTripInfoTemplate() {
  return /*HTML*/ `
    <section class="trip-main__trip-info  trip-info">
      ${createTripInfoMainTemplate()}
      ${createTripInfoCostTemplate()}
    </section>`;
}

export default class InfoView extends AbstractView {
  #tripEvents = null;
  #tripDestinations = null;
  #tripOffers = null;

  constructor({tripEvents, tripDestinations, tripOffers}) {
    super();
    this.#tripEvents = tripEvents;
    this.#tripDestinations = tripDestinations;
    this.#tripOffers = tripOffers;
  }

  get template() {
    return createTripInfoTemplate();
  }
}
