import { NovoPostComponent } from './pages/novo-post/novo-post.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'postagens',
    component: PostsComponent,
  },
  {
    path: 'novoPost',
    component: NovoPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
