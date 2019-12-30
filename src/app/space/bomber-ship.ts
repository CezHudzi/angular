import {SpaceShip} from './space-ship';
import {Pilot} from './pilot';

export class BomberShip extends SpaceShip {

  activeShields = true;
  constructor(pilot?: Pilot) {
    super('D3-101', './assets/bomber.png', pilot);
  }
}
