import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { LikesComponent } from '../likes/likes.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HomeComponent, CreatePostComponent, LikesComponent, ProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
