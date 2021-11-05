import Model from './Model';

export default class PasswordModel extends Model {
  protected static tableName = 'password';
  public accountId: string;
  public passwordHash: string;
  public validFrom: string;
}