import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imgSrc: string |undefined;
  @Input() title: string |undefined;
  @Input() description: string |undefined;
  @Input() linkToAccess: string |undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
