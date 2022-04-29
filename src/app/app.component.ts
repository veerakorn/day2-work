import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultLike: number = 100;
  defaultDislike: number = 25;

  like: number = this.defaultLike;
  dislike: number = this.defaultDislike;
  youLike: boolean = false;
  youDislike: boolean = false;

  likeButtonClicked(){
    //console.log('like button clicked');

    if(!this.youLike){
      this.youLike = true;
      this.like = this.defaultLike + 1;
    }else{
      this.youLike = false;
      this.like = this.defaultLike;
    }

    this.youDislike = false;
    this.dislike = this.defaultDislike;
  }

  dislikeButtonClicked(){
    //console.log('dislike button clicked');

    if(!this.youDislike){
      this.youDislike = true;
      this.dislike = this.defaultDislike + 1;
    }else{
      this.youDislike = false;
      this.dislike = this.defaultDislike;
    }

    this.youLike = false;
    this.like = this.defaultLike;
  }
}
