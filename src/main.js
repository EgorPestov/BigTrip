import {render} from './framework/render.js';
import PlanPresenter from './presenter/plan-presenter.js';
import InfoPresenter from './presenter/info-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import EventsModel from './model/events-model.js';
import FilterModel from './model/filter-model.js';
import NewEventButtonView from './view/new-event-button-view.js';


const tripMainContainer = document.querySelector('.trip-main');
const filtersContainer = tripMainContainer.querySelector('.trip-controls__filters');
const planContainer = document.querySelector('.trip-events');
const eventsModel = new EventsModel();
const filterModel = new FilterModel();

const planPresenter = new PlanPresenter({
  planContainer,
  eventsModel,
  filterModel,
});

const infoPresenter = new InfoPresenter({
  infoContainer: tripMainContainer,
  eventsModel: eventsModel,
});

const filterPresenter = new FilterPresenter({
  filterContainer: filtersContainer,
  filterModel,
  eventsModel,
});

infoPresenter.init();
filterPresenter.init();
planPresenter.init();

render(new NewEventButtonView(), tripMainContainer);
