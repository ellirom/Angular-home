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

  constructor( 
   private http: HttpClient
  ) { }

getProducts(options): Observable<Product[]>{

  return this.http.get<Product[]>(`${this.apiUrl}Products` , {params: options})
// return this.http.get<Product[]>(`${this.apiUrl}Products?sortBy=${name}&order=${direction}`)
}


getProductSingle(id: number): Observable<Product>{
  return this.http.get<Product>(`${this.apiUrl}Products/${id}`)
}
}
