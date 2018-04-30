import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router,} from '@angular/router';
import {AppComponent} from '../app.component';



@Injectable()
export class GUIService {
  private body: AppComponent;
  public isLoginPage: boolean = true;
  private _showNavigation: boolean = false;
  public isMaximized: boolean = false;
  public isFixed: boolean = false;
  private _showHeader: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute) {

    this.router.events.subscribe((event: any) => {
      let url: string;
      if (event.urlAfterRedirects) {
        url = event.urlAfterRedirects;
      } else {
        url = event.url;
      }
      if (event instanceof NavigationEnd) {
        if (url.indexOf('login') > -1) {
          this.showHeader = false;
          this.showNavigation = false;
        } else {
          this.showHeader = true;
          this.showNavigation = true;
        }
      }
    });
  }


  public minimize() {
    this.body.addClass("minimized");
    this.body.removeClass("maximized");
    this.isMaximized = false;
  }

  public maximize() {
    this.body.addClass("maximized");
    this.body.removeClass("minimized");
    this.isMaximized = true;
  }

  public toggleMinimizeMaximize() {
    if (!this.isMaximized) {
      this.maximize();
    } else {
      this.minimize();
    }
  }


  get showNavigation(): boolean {
    return this._showNavigation;
  }

  set showNavigation(value: boolean) {
    this._showNavigation = value;
  }

  get showHeader(): boolean {
    return this._showHeader;
  }

  set showHeader(value: boolean) {
    this._showHeader = value;
  }

  public setBody(appComponent: AppComponent) {
    this.body = appComponent;
  }
}
