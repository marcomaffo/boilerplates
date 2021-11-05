import KoaError from './koaError';

export default class MissingSessionError extends KoaError {
  name = 'MissingSessionError';
  message = 'Keine aktive Session gefunden';
}