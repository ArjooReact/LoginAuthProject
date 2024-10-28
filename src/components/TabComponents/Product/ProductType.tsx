export interface ProductType{
    title?:string
}

export type ProductResponse={
    limit:number,
    products:Array<ProductListType>
}

export type ProductListType={
    availabilityStatus:string,
    brand:string,
    category:string,
    description:string,
    dimensions:Array<any>,
    discountPercentage:number,
    id:number,
    impages:Array<any>,
    meta:Array<any>,
    minimumOrderQuantity:string,
    price:number,
    rating:number,
    returnPolicy:string,
    reviews:Array<any>,
    shippingInformation:string,
    sku:string,
    stock:number,
    tags:Array<any>,
    thumbnail:string,
    title:string,
    warrantyInformation:string,
    weight:number
}