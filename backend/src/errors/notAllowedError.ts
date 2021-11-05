import KoaError from './koaError';

export default class NotAllowedError extends KoaError {
  name = 'NotAllowedError';
  status = 403;
  message = 'Dies ist mit ihren Rechten nicht erlaubt';
}