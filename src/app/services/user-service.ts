import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../../../types';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // Função Interna de Get de Usuários e Criação de Usuários

  http = inject(HttpClient);
  localStorageKey = 'threads_user';

  // Função de criar nos usuários
  createUser(name: string) {
    return this.http.post<User>("http://localhost:3002/user/create", {
      name,
    });
  }

  // Função de salvar os dados do usuário atráves dos cookies
  saveUserToStorage(user: User) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  // Função de Buscar usuário no banco de dados pelos cookies
  getUserFromStorage() {
    const user = localStorage.getItem(this.localStorageKey);
    console.log(user)
    return user ? (JSON.parse(user) as User) : null;
  }
}