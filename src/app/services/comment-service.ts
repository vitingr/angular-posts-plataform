import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../environment";
import { Comment } from "../../../types";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  http = inject(HttpClient)

  getComments(parentId: string = "") {
    let url = `${environment.apiBaseUrl}/comment`
    if (parentId) {
      url += `?parentId=${parentId}`
    }
    this.http.get<Comment[]>(url)
  }
}