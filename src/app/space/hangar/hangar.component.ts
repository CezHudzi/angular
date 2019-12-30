import {Component, OnInit, ViewChild} from '@angular/core';
import {SpaceShip} from '../space-ship';
import {FighterShip} from '../fighter-ship';
import {BomberShip} from '../bomber-ship';
import {Pilot} from '../pilot';
import {PilotRoomComponent} from '../pilot-room/pilot-room.component';
import {SpaceShipService} from '../space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;




  selectedPilot: Pilot = null;



  constructor(private spaceShipService: SpaceShipService) { }

  spaceShips = this.spaceShipService.hangarShips;

  ngOnInit() {


  }


  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }
  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }






}
