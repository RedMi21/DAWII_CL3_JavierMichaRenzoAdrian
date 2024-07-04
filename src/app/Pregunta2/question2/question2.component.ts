import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../Services/comment.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  filteredComments: any[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommentsWithGarfieldBiz().subscribe(
      comments => {
        this.filteredComments = comments;
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }

}
