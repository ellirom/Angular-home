import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
}) 
export class ProductService {

  apiUrl = environment.apiUrl;

  constructor(
   private http: HttpClient
  ) { }

getProducts(): Observable<Product[]>{
return this.http.get<Product[]>(`${this.apiUrl}Products`)
}
getProductSingle(id: number): Observable<Product>{
  return this.http.get<Product>(`${this.apiUrl}Products/${id}`)
}
}
