import { inject, injectable } from 'inversify';
import { MongoDBClient } from '../utils/mongodb/client';
import { Article } from '../model';
import TYPES from '../constant/types';

@injectable()
export default class HomeService {
    public index(): object {
        return {
            errcode:0,
            errmsg:"welcome"
        }
    }
}
