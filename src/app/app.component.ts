import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './services/user-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'threads';
  userService = inject(UserService)
  
  constructor() {
    // Cookies, verificar se existe um usuário cadastrado, se não existir, gerar um novo
    const user = this.userService.getUserFromStorage()
    if (!user) {
      const randomNumber = Math.ceil(Math.random() * 400 * 1000)
      const randomName = `user_${randomNumber}`
      this.userService.createUser(randomName).subscribe(user => {
        console.log("Usuário criado", user)
        // Armazenar cookies do usuário
        this.userService.saveUserToStorage(user)
      })
    }
  }

}
