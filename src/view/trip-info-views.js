import { createElement } from '../render';
import { createTripInfoTemplate } from '../templates/trip-info-template';

export default class TripInfoViews {
  getTemplate() {
    return createTripInfoTemplate();
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
