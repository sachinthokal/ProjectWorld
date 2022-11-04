import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((response: any[]) => {
      this.posts = response;
      console.log(this.posts);
    });
  }
  createPost(input: HTMLInputElement) {
    let post:any = { title: input.value };
    input.value='';

    this.http.post(this.url, JSON.stringify(post)).subscribe(
      response =>{
        post.id= response['id'];
        this.posts.splice(0,0,post);
    console.log(post);
      });
  }
}
