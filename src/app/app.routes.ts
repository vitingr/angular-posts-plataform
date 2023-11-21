import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)
  },
  {
    path: "create-post",
    loadComponent: () => import("./create-post/create-post.component").then(m => m.CreatePostComponent)
  },
  {
    path: "likes",
    loadComponent: () => import("./likes/likes.component").then(m => m.LikesComponent)
  },
  {
    path: "profile",
    loadComponent: () => import("./profile/profile.component").then(m => m.ProfileComponent)
  }
];
