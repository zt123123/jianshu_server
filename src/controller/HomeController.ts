import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    requestParam,
    requestBody,
} from 'inversify-koa-utils';

import { inject, injectable } from 'inversify';
import { Article } from '../model/index';
import HomeService from '../service/HomeService';
import TYPES from '../constant/types';

@controller('/')
@injectable()
class HomeController implements interfaces.Controller {
    constructor(
        @inject(TYPES.HomeService) private HomeService: HomeService
    ) { }

    @httpGet('/')
    public index(): object {
        return this.HomeService.index();
    }
}

export default HomeController