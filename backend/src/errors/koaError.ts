export default class KoaError extends Error {
  status = 400;
  name = 'Error';
  message = 'Es ist ein Fehler aufgetreten';
}