import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  imports: [Header, ProfileCard, Skills, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Kim Charles Prosas';
  location = 'Angeles City, Pampanga';
  email = 'kbprosas@student.hau.edu.ph';
  phone = '09651381392';

  profile = 'I am an IT student who wants to grow into a full-stack web developer who builds clean, fast and ' +
    'easy-to-use web applications. My goal is to turn real problems into simple interfaces that people ' +
    'enjoy using, starting with small business tools and school projects. I am currently learning ' +
    'Angular and TypeScript because I like how components keep a large project organized and reusable. ' +
    'I want to keep improving my skills in responsive design, accessibility and teamwork, so that I can ' +
    'contribute to a development team, write code that others can read, and keep learning every day.';;

  skills = [
    'HTML5 and semantic markup',
    'CSS and responsive layouts',
    'JavaScript',
    'TypeScript',
    'JSON and data structures',
    'Git and GitHub',
    'Angular',
    'PHP'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
