interface ITopic {
    id: number,
    title: string,
    imgUrl: string
}

interface IArticle {
    id: number,
    title: string,
    desc: string,
    imgUrl: string
}

interface ITag {
    id: number,
    label: string,
}

export {
    ITopic,
    IArticle,
    ITag
}