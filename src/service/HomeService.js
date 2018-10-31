
class HomeService {
    constructor() {

    }
    static index() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1111111)
            }, 5000);
        })
    }
}

module.exports = HomeService