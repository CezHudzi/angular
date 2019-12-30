import { Component, OnInit } from '@angular/core';
import {SpaceShipService} from '../space-ship.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css']
})
export class DestructionRoomComponent implements OnInit {

  constructor(private spaceShipService: SpaceShipService) { }

  shipIndexControl = new FormControl(null);

  spaceShips = this.spaceShipService.hangarShips;

  ngOnInit() {
  }

  orderDestruction() {
    console.log( this.shipIndexControl.value)
    this.spaceShipService.removeShip(this.shipIndexControl.value)
    this.shipIndexControl.reset();
  }


}
