import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toy } from '../../toy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.scss' ]
})
export class ItemComponent {

  @Input()
  public toy!: Toy

  @Output()
  public buyClicked: EventEmitter<number>;

  constructor() {
    this.buyClicked = new EventEmitter<number>();
  }

}
