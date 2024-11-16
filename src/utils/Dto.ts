export type storeDataDto = {
    userId: string
    name: string,
    description?: string,
    storeImage?: string
}
export type storeDataPutDto = {
    userId: string
    name: string,
    description?: string,
    storeImage?: string,
    bannerImage?: string,
    bannerTitle?: string,
    bannerDescrip?: string,

}