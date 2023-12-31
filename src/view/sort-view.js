import { createElement } from '../render';
import { createSortTemplate } from '../templates/sort-template';

export default class SortView {

  getTemplate() {
    return createSortTemplate();
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
