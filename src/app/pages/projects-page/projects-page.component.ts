import { Component, OnInit } from '@angular/core';
import {ProjectCard} from "../../shared/interfaces/project-card";
import {transition, trigger, useAnimation} from "@angular/animations";
import {flash} from "ng-animate";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  animations: [
    trigger('loopFlash', [transition('* <=> *', useAnimation(flash))])
  ]
})
export class ProjectsPageComponent implements OnInit {
  animate: any = true;
  projects: ProjectCard[] = [
    {
      title: 'My-gulp-project', text: 'The app I was making to get to know gulp',
      href: 'https://github.com/Wesppp/my-gulp-progect', img: './assets/projects/my-gulp-project.png'
    },
    {
      title: 'Heroes-app', text: 'My first application on angular, is an improved application from the documentation',
      href: 'https://github.com/Wesppp/heroes-app-angular', img: './assets/projects/heroes-app.png'
    },
    {
      title: 'My-api', text: 'working with your own API, angular',
      href: 'https://github.com/Wesppp/my-API-angular', img: './assets/projects/my-api.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.animate = !this.animate
    },5000)
  }

}
