import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {flash} from "ng-animate";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [
    trigger('loopFlash', [transition('* <=> *', useAnimation(flash))])
  ]
})
export class AboutPageComponent implements OnInit {
  logos: string[] = [
    './assets/icons/javascript.png',
    './assets/icons/html.png',
    './assets/icons/webpack.png',
    './assets/icons/typescript.png',
    './assets/icons/sass.png',
    './assets/icons/gulp.png',
    './assets/icons/git.png',
    './assets/icons/css3.png',
    './assets/icons/angularjs.png',
    './assets/icons/api.png',
  ]

  animate: any = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.animate = !this.animate
    },5000)
  }

}
