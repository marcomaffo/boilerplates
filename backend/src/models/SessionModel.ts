import Model from './Model';

export type SessionContent = {
}

export default class SessionModel extends Model {
  protected static tableName = 'session';
  public accountId: string;
  public validTill: string;
  public content?: SessionContent;
}