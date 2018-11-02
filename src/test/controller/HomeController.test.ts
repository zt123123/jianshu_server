import { expect } from 'chai';
import HomeController from '../../controller/HomeController';
import HomeService from '../../service/HomeService';

describe('HomeController', () => {
    let controller;

    beforeEach(() => {
        controller = new HomeController(new HomeService());
    });
    // it('should get welcome', () => {
    //     let data = controller.index()
    //     expect(data).to.deep.equal(
    //         {
    //             errcode: 0,
    //             errmsg: "welcome"
    //         }
    //     );
    // });
});