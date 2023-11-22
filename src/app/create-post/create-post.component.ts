import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from '../components/comment-form/comment-form.component';
import { CommentService } from '../services/comment-service';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, CommentFormComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  commentService = inject(CommentService)
  userService = inject(UserService)

  comments = signal<any[]>([])


  createComment(formValues: { text: string }) {
    const { text } = formValues
    const user = this.userService.getUserFromStorage()

    if (!user) {
      return
    } else {
      this.commentService.createComment({
        ownerId: user.id,
        ownerName: user.name,
        text
      }).subscribe(createdComment => {
        this.comments.set([
          createdComment,
          ...this.comments()
        ])
      })
    }
  }
}
