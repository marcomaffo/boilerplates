import KoaError from './koaError';

export default class NotFoundError extends KoaError {
  status = 404;
  name = 'NotFoundError';
  message = 'Die angeforderte Ressource konnte nicht gefunden werden';
}