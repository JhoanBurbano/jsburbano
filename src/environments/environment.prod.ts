import { environment as base } from "./environment.base";

export const environment = {
  ...base,
    production: true,
    ENVIRONMENT: 'production',
    API_URL: 'https://jhoanburbano.github.io/portfolio-web/',
  };