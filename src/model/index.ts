import { ITopic, IArticle, ITag } from "../interface"

import { injectable } from 'inversify';

@injectable()
export class Topic implements ITopic {
    constructor(
        public id: number,
        public title: string,
        public imgUrl: string
    ) { }
}

@injectable()
export class Article implements IArticle {
    constructor(
        public id: number,
        public title: string,
        public desc: string,
        public imgUrl: string
    ) { }
}

@injectable()
export class Tag implements ITag {
    constructor(
        public id: number,
        public label: string
    ) { }
}