import DS from 'ember-data';
import attr from 'ember-data/attr';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default DS.Model.extend({
  name: attr('string'),
  type: attr('string'),
  html: attr('string'),
  url: attr('string'),
  createdAt: attr('date'),
  client: attr('string'),
  clientUrl: attr('string'),
  logo: attr('string'),
  screenshots: attr(),
  tags: attr(),

  safetyHtml: computed('html', function() {
    return htmlSafe(this.html);
  })
});
