import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../environment";
import { Comment, createCommentDto } from "../../../types";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  http = inject(HttpClient)

  // Função de busca de comentários pela URL
  // funciona como os asyncs juntos com os useEffects, pelo fetch
  getComments(parentId: string = "") {
    let url = `${environment.apiBaseUrl}/comment`
    if (parentId) {
      url += `?parentId=${parentId}`
    }
    return this.http.get<Comment[]>("http://localhost:3002/comment")
  }

  createComment(comment: createCommentDto) {
    return this.http.post<Comment>("http://localhost:3002/comment/create", {
      ownerId: comment.ownerId,
      ownerName: comment.ownerName,
      text: comment.text
    })
  }
}