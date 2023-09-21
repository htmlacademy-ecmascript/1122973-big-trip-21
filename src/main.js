import FiltersView from './view/filters-view';
import { render, RenderPosition } from './render';
import BoardPresenter from './presenter/board-presenter';
import TripInfoViews from './view/trip-info-views';

const pageHeader = document.querySelector('.page-header');
const pageMain = document.querySelector('.page-main');
const eventsElement = pageMain.querySelector('.trip-events');
const controlsFiltersElement = pageHeader.querySelector('.trip-controls__filters');
const tripMainElement = pageHeader.querySelector('.trip-main');

render(new TripInfoViews(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FiltersView(), controlsFiltersElement);

const boardPresenter = new BoardPresenter({container: eventsElement});

boardPresenter.init();

