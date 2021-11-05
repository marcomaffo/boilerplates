import KoaError from './koaError';

export default class MissingParameterError extends KoaError {
  name = 'MissingParameterError';
  message = 'Parameter fehlt bei Anfrage';
}