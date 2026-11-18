import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description =
    'I am a student from Holy Angel University who loves turning ideas into working web pages. ' +
    'When I am not coding, I like exercising, playing basketball, and also playing video games such as valorant, mobile legends etc.';
}
