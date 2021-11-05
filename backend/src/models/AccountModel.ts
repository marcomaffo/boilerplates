import Model from './Model';

export default class AccountModel extends Model {
  protected static tableName = 'account';
  public emailAddress: string;
  public firstName: string;
  public lastName: string;
}