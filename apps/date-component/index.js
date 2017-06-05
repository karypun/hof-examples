'use strict';
const summary = require('hof-behaviour-summary-page');

module.exports = {
  name: 'date-component',
  baseUrl: '/date-component',
  steps: {
    '/date-of-birth': {
      fields: ['date-of-birth'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', summary],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
