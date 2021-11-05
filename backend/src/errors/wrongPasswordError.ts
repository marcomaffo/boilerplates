import KoaError from './koaError';

export default class WrongPasswordError extends KoaError {
  status = 402;
  name = 'WrongPasswordError';
  message = 'Sie haben ein falsches Passwort oder eine falsche E-Mail Adresse eingegeben';
}