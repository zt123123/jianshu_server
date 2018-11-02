import { Db, ObjectID } from 'mongodb';
import { injectable } from 'inversify';
import { MongoDBConnection } from './connection';
import { Article } from '../../model';

@injectable()
export class MongoDBClient {
  public db: Db;

  constructor() {
    MongoDBConnection.getConnection((connection) => {
      this.db = connection;
    });
  }

  public find(collection: string, filter: Object, result: (error, data) => void): void {
    this.db.collection(collection).find(filter).toArray((error, find) => {
      return result(error, find);
    });
  }

  public findOneById(collection: string, id: number, result: (error, data) => void): void {
    this.db.collection(collection).find({ id }).limit(1).toArray((error, find) => {
      return result(error, find[0]);
    });
  }

  public insert(collection: string, model: Article, result: (error, data) => void): void {
    this.db.collection(collection).insertOne(model, (error, insert) => {
      return result(error, insert.ops[0]);
    });
  }

  public update(collection: string, id: number, model: Article, result: (error, data) => void): void {
    this.db.collection(collection).updateOne(
      { id },
      { $set: model },
      (error, update) => result(error, model)
    );
  }

  public remove(collection: string, id: number, result: (error, data) => void): void {
    this.db.collection(collection).deleteOne({ id }, (error, remove) => {
      return result(error, remove);
    });
  }
}
