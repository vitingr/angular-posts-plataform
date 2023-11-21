import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../../types';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  http = inject(HttpClient)

  getPosts(parentId: string = "") {
    let url = `${environment.apiBaseUrl}/comment`
    if (parentId) {
      url += `?parentId=${parentId}`
    }
    this.http.get<Comment[]>(url)
  }
}
