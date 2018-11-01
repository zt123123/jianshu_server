"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var client_1 = require("../utils/mongodb/client");
var types_1 = require("../constant/types");
var HomeService = /** @class */ (function () {
    function HomeService(mongoClient) {
        this.mongoClient = mongoClient;
    }
    HomeService.prototype.getUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.find('articleList', { id: id }, function (error, data) {
                if (!error) {
                    resolve(data);
                }
                else {
                    reject(error);
                }
            });
        });
    };
    HomeService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.find('articleList', {}, function (error, data) {
                if (!error) {
                    resolve(data);
                }
                else {
                    reject(error);
                }
            });
        });
    };
    HomeService.prototype.addArticle = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.find('articleList', { id: id }, function (error, data) {
                if (!error) {
                    resolve(data);
                }
                else {
                    reject(error);
                }
            });
        });
    };
    HomeService.prototype.addUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.insert('articleList', {
                id: 5,
                title: "什么叫经典？奥迪30秒的创意广告，就把奔驰、宝马、沃尔沃气哭了！",
                desc: "今天分享一支老广告 但绝对是堪称经典 当你还在为可口可乐和百事可乐的世纪互黑 拍手叫绝时 奥迪却用一支30秒的广告将四个竞品气到哭 更多设计文章...",
                imgUrl: "https://static.nodeveloper.top/img/1.jpg"
            }, function (error, data) {
                if (!error) {
                    resolve(data);
                }
                else {
                    reject(error);
                }
            });
        });
    };
    HomeService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.MongoDBClient)),
        __metadata("design:paramtypes", [client_1.MongoDBClient])
    ], HomeService);
    return HomeService;
}());
exports.default = HomeService;
