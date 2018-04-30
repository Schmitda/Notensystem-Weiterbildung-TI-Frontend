import {Component, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {GUIService} from '../../services/gui.service';

@Component({
  selector: 'bfh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInDelayed', [
      transition(':enter', [
          style({position: "absolute", opacity: 0, transform: 'scale(0.6)'}),
          animate("500ms 500ms ease-in-out", keyframes([
            style({display: "absolute", offset: 0.0}),
            style({opacity: 0.8, transform: 'scale(1.1)', offset: 0.8}),
            style({opacity: 1, transform: 'scale(1)', offset: 1})
          ]))
        ],
      ),
      transition(':leave',
        style({display: "none"})
      )
    ])
  ]
})
export class HeaderComponent  implements OnInit {

  constructor(public guiService: GUIService) {
  }

  ngOnInit() {
  }


  public logout() {
    /*this.userService.logout();*/
  }

  public toggleHeader() {
    this.guiService.isFixed = true;
    this.guiService.toggleMinimizeMaximize();
  }

  public openFullScreen() {
    if ((<any>window).fullScreen || (window.innerWidth === screen.width && window.innerHeight === screen.height)) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((<any>document).mozCancelFullScreen) {
        (<any>document).mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else {
      let element: any = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }
    }

  }

}
