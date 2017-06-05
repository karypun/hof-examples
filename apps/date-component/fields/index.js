'use strict';
const dateComponent = require('hof-component-date');

module.exports = {
  'date-of-birth': dateComponent('date-of-birth', {
    // before means a date cannot be in the future
    validate: ['required', 'before']
  })
};
