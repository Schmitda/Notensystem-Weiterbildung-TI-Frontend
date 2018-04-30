import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {GUIService} from '../../services/gui.service';

@Component({
  selector: 'bfh-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('leftInLeftOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({
          opacity: 0,
          transform: 'translateX(-50%)'
        }),
        animate(500, style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({
          opacity: 0,
          transform: 'translateX(-50%)'
        }))
      ])
    ])
  ]
})
export class NavigationComponent  implements OnInit {
  public menuToShow: string = null;


  public showMenu(name: string) {
    this.menuToShow = name;
  }

  public logout() {
/*
    this.userService.logout();
*/
  }

  constructor(private guiService: GUIService) {
  }

  ngOnInit() {
  }

}
