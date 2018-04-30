import {Component, HostBinding} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GUIService} from './services/gui.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  public bodyClasses: string[] = ['page-header-fixed', 'page-sidebar-closed-hide-logo', 'page-container-bg-solid'];

  constructor(public guiService: GUIService) {
    this.addClass('maximized');
  }

  @HostBinding('class')
  get checkClasses() {
    return this.bodyClasses.join(' ');
  }

  hasClass(string: string) {
    return (this.bodyClasses.indexOf(string) > -1);
  }

  addClass(string: string) {
    if (this.bodyClasses.indexOf(string) === -1) {
      this.bodyClasses.push(string);
    }
  }

  removeClass(string: string) {
    if (this.bodyClasses.indexOf(string) > -1) {
      this.bodyClasses.splice(this.bodyClasses.indexOf(string), 1);
    }
  }

  public getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
