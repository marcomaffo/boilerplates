import KoaError from './koaError';

export default class AlreadyExistingError extends KoaError {
  name = 'AlreadyExistingError';
  message = 'Die Ressource exiistiert bereits';
}