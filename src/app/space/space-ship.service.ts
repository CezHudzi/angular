import { Injectable } from '@angular/core';
import {OrderFormValue} from '../order-form-value';
import {BehaviorSubject, interval, Observable} from 'rxjs';
import {SpaceShip} from './space-ship';
import {SpaceShipType} from '../space-ship-type.enum';
import {FighterShip} from './fighter-ship';
import {BomberShip} from './bomber-ship';
import {map, take, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

  static productionTime = 1000;
  hangarShips = new BehaviorSubject<SpaceShip[]>([])


  constructor() { }



  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {

    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.productionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips.next(ships);
  }

}
