import { render } from '../render';
import SortView from '../view/sort-view';
import EventsList from '../view/event-list-views';
import EditEventViews from '../view/edit-event-views';
import EventItemViews from '../view/event-item-views';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventList = new EventsList();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventList, this.container);

    render(new EditEventViews(), this.eventList.getElement());

    for(let i = 0; i < 3; i++) {
      render(new EventItemViews(), this.eventList.getElement());
    }
  }
}
