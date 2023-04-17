import { environment as base } from "./environment.base";

export const environment = {
  ...base,
    production: true,
    ENVIRONMENT: 'production',
    HOST: 'https://jhoanburbano.github.io/portfolio-web/',
    API_URL: 'https://portfolio-services.vercel.app/',
  };