import { createElement } from '../render';
import { createEventsList } from '../templates/events-list-template';

export default class EventsList {
  getTemplate() {
    return createEventsList();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
