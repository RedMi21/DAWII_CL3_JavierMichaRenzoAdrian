import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getCommentsWithGarfieldBiz(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(comments => comments.filter(comment => comment.email.endsWith('@garfield.biz')))
    );
  }
}
