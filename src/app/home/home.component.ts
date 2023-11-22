import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../components/comment/comment.component';
import { CommentService } from '../services/comment-service';
import { Comment } from '../../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  commentService = inject(CommentService)

  comments = signal<Comment[]>([])

  ngOnInit(): void {
    this.getComments()
  }

  getComments(): any {
    this.commentService.getComments().subscribe((comments: Comment[]) => {
      this.comments.set(comments)
      console.log(comments)
    })
  }
}
