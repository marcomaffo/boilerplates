import KoaError from './koaError';

export default class WrongRouteError extends KoaError {
  name = 'WrongRouteError';
  message = 'Falsche Route für die Anfrage';
}