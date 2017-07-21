import { Comment } from './comment.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


@Injectable()
export class PostService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: Http) { }

  get() {
    return this.http
      .get(this.postsUrl)
      .map((data: Response) => data.json());
  }

  getComments(): Observable<Comment[]> {
    return this.http
      .get(this.commentsUrl)
      .map((comments: Response) => {
        return comments.json().map((comment: Comment) => {
          return new Comment(
            comment.postId,
            comment.id,
            comment.name,
            comment.email,
            comment.body);
        })
      });
  }
}
