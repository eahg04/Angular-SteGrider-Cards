import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/img/tree.jpeg',
      username: 'nature',
      content: 'I Saw this awesome tree during my hike today',
    },
    {
      title: 'Swony Mountain',
      imageUrl: 'assets/img/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/img/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/img/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today',
    },
  ];
}
