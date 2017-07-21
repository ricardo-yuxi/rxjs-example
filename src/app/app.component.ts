import { Comment } from './comment.model';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rxjs Example';
  comment: Comment;
  posts: Observable<any[]>;
  comments: Observable<Comment[]>

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
    this.getComments();
  }

  getPosts() {
    this.posts = this.postService.get();
  }

  getComments() {
    this.comments = this.postService.getComments();
  }
}
