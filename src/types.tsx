export interface Attribute {attribute : string, description: string};
export interface Review {image_src : string ,name : string , location: string, description: string};
export interface Project {image_src : string , name: string, type: string};
export interface Article {image_src : string , name: string, type: string, date: string};
export interface Statistic{number : number , text: string};
export interface Price{name : string , price: number, features: string[] };