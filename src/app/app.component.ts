import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  public showNav:any;
  public width: any;


  ngOnInit(){
    this.width = window.innerWidth;
    this.showNav = this.width>800
  }

  @HostListener("window:resize",["$event"])

  onWindowResize(){
    this.width = window.innerWidth;
    this.showNav = this.width>800
  }


  toggleSideNav(){
    this.showNav = !this.showNav;
  }
}

