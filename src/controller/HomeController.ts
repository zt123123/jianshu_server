import {
    controller, httpGet, httpPost
} from 'inversify-koa-utils';
import { inject } from 'inversify';
import HomeService from '../service/HomeService';
const TYPES = {
    UserService: Symbol.for('UserService')
};

@controller('/')
class HomeController {
    constructor(
        @inject(TYPES.UserService) private homeService: HomeService
    ) { }

    @httpGet('/')
    public getUser() {
        return this.homeService.getUsers();
    }

    @httpPost('/')
    public postUser() {
        return this.homeService.newUser({
            id: 5,
            title: "父亲的偏执，逼疯了才貌双全的女儿",
            desc: "她是我中学同学。 那时的她貌美如花，一头瀑布般的长发又黑又亮，皮肤白里透红，眉目如星，灿若星辰，一颦一笑都堪比林黛玉，最让人嫉妒的是她的才华，我...",
            imgUrl: "https://static.nodeveloper.top/img/1.jpg"
        });
    }
}

export default HomeController