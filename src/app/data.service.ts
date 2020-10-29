import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './data.model';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
    constructor(
    private http: HttpClient
  ){}   
 
getPosts() : Observable<Post[]>{

  return this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
    map(post =>{
 console.log(post);
   return post
      }),
      mergeMap( post => {
      
        return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
      }
      ),).pipe(
        map(post =>{
          console.log(post);
            return post
   }))   }}
    

      



    