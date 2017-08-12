export interface menuItem {
    id:string;
    name: string;
    price: string;
    type:string;
    subCategory?:{category:string};
    // subCategory?:string;
} 