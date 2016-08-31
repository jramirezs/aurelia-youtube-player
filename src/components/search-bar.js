import { inject, bindable, bindingMode } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class SearchBar {
  @bindable term;

  constructor(ea) {
    this.ea = ea;
  }

  onFormSubmit() {
    this.ea.publish('searchTermChanged', { term: this.term });
  }
}
