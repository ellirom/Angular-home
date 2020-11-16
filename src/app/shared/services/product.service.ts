import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
}) 
export class ProductService {



  apiUrl = environment.apiUrl;

  changeView = new BehaviorSubject('list');

products: Product[];


  constructor( 
   private http: HttpClient
  ) { }

getProducts(options): Observable<Product[]>{
  const params = {...options};
  if (!params.hasOwnProperty('page')){
params.page = 1;

  }
  params.limit = 12;
  return this.http.get<Product[]>(`${this.apiUrl}Products` , {params})
// return this.http.get<Product[]>(`${this.apiUrl}Products?sortBy=${name}&order=${direction}`)
}


getProductSingle(id: number): Observable<Product>{
  return this.http.get<Product>(`${this.apiUrl}Products/${id}`)
}



}
