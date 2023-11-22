import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent {
  @Input() placeholder = "Digite algo..."
  @Input() buttonText = "Publicar"
  @Output() formSubmitted = new EventEmitter<{
    text: string;
  }>();

  formSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const textAreaElement = form.elements.namedItem(
      'commentText'
    ) as HTMLTextAreaElement;
    const commentText = textAreaElement.value;
    form.reset();
    this.formSubmitted.emit({
      text: commentText,
    });
  }
  
}
