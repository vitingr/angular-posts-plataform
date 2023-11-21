import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from '../components/comment-form/comment-form.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, CommentFormComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

}
