import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from './../../core/services/postsService/posts.service';
import PostsI from 'src/app/core/models/posts.model';

@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.scss'],
})
export class NovoPostComponent implements OnInit {
  postForm = new FormGroup({
    userId: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });
  constructor(private route: Router, private postsService: PostsService) {}

  ngOnInit(): void {}

  cancelarCadastro() {
    this.route.navigateByUrl('/postagens');
  }
  onSubmit() {
    this.postsService.cadastrarPost(this.postForm.value).subscribe((post) => {
      if (post) {
        this.route.navigateByUrl('/postagens');
      } else {
        alert('Houve um erro ao cadastrar');
      }
    });
  }
}
