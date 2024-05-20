import { Component } from '@angular/core';
import { PostService } from '../../shered/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private postService: PostService) { }
  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {this.posts = data;}, 
      error => {
      console.error('Error al obtener las publicaciones:', error);
    });
  }
}
