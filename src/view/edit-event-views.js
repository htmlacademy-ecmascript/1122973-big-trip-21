import { createElement } from '../render';
import { createEditEvent } from '../templates/event-edit-template';

export default class EditEventViews{
  getTemplate() {
    return createEditEvent();
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
