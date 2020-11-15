import { Url } from 'url';

export interface Product {
    id: number;
    name: string;
    image: Url;
    description: string;
    price: number;
    availability: boolean;
} 

export enum Availability{
true,
false,

}