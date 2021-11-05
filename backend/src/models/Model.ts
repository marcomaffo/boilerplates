import type { Knex } from "knex";

type Constructor<T> = {
  new (): T;
  whereInternal: (condition: any) => Knex.QueryBuilder;
}

export default abstract class Model {

  protected static tableName: string;
  public id: string;
  public created: Date;


  public static whereInternal(condition?: any): Knex.QueryBuilder {
    let query = knex(this.tableName).select('*');
    if (condition) {
      query = query.where(condition)
    }
    return query;
  }

  public static async where<T extends Model>(this: Constructor<T>, condition: Partial<T>): Promise<T> {
    const data = this.whereInternal(condition).first();
    return data;
  }
}
