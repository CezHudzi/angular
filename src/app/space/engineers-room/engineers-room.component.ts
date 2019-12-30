import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpaceShipType} from '../../space-ship-type.enum';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormValue} from '../../order-form-value';
import {SpaceShip} from '../space-ship';
import {SpaceShipService} from '../space-ship.service';
import {map} from 'rxjs/operators';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  spaceShipTypes: ShipType[] = [
    {label: 'MODEL C', value: SpaceShipType.Fighter},
    {label: 'MODEL D', value: SpaceShipType.Bomber}
  ];



  private producing: boolean;

  form = new FormGroup({



    shipType: new FormControl(SpaceShipType.Fighter, {
      validators: [Validators.required]
    }),



    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)]
    })




  });




  constructor(private spaceShipService: SpaceShipService ) { }

  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  ngOnInit() {
  }

  orderSpaceShips(formValue: OrderFormValue) {
    this.producing = true;
    console.log(formValue);

    this.spaceShipService.produceShips(formValue).subscribe({
      complete: () => this.producing = false
    });


  }

}
