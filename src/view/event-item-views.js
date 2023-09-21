import { createElement } from '../render';
import { createEventItemTemplate } from '../templates/event-item-template';

export default class EventItemViews{
  getTemplate() {
    return createEventItemTemplate();
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
