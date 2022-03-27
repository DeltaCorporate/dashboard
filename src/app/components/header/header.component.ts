import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() showNav: boolean | undefined;
  @Output() showNavChange = new EventEmitter<boolean>();

  toggleSideNav() {
    this.showNav = !this.showNav;
    this.showNavChange.emit(this.showNav);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
