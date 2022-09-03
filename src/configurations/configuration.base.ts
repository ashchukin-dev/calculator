import { merge } from 'lodash';

export const initConfiguration = (configuration: any): any =>
  merge({
    production: false,
    language: {
      available: ['en'],
      default: 'en'
    }
  }, configuration);
