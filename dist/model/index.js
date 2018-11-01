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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var Topic = /** @class */ (function () {
    function Topic(id, title, imgUrl) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
    }
    Topic = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Number, String, String])
    ], Topic);
    return Topic;
}());
exports.Topic = Topic;
var Article = /** @class */ (function () {
    function Article(id, title, desc, imgUrl) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.imgUrl = imgUrl;
    }
    Article = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Number, String, String, String])
    ], Article);
    return Article;
}());
exports.Article = Article;
var Tag = /** @class */ (function () {
    function Tag(id, label) {
        this.id = id;
        this.label = label;
    }
    Tag = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Number, String])
    ], Tag);
    return Tag;
}());
exports.Tag = Tag;
