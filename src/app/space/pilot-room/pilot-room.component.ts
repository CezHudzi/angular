import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pilot} from '../pilot';
import {PilotService} from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  @Output() selected = new EventEmitter<Pilot>();
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;


  constructor(private pilotService: PilotService) { }


  ngOnInit() {

    this.pilotService.getpilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: err => alert('BŁĄD')
      });

  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }


  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }
}
