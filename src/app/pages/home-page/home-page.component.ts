import { Component, OnInit } from '@angular/core';
import { rubberBand } from "ng-animate";
import {transition, trigger, useAnimation} from "@angular/animations";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('loopBounce', [transition('* <=> *', useAnimation(rubberBand))])
  ]
})
export class HomePageComponent implements OnInit {
  icons: string[] = [
    'assets/icons/vk-icon.png',
    'assets/icons/telegram-icon.png',
    'assets/icons/instagram-icon.png',
    'assets/icons/github-icon.png'
  ]
  bounce: any = true;


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.bounce = !this.bounce
    },5000)
  }

}
