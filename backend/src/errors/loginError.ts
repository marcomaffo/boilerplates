import KoaError from './koaError';

export default class LoginError extends KoaError {
  name = 'LoginError';
  message = 'Fehler beim Login';
}