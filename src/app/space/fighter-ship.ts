import {SpaceShip} from './space-ship';
import {Pilot} from './pilot';

export class FighterShip extends SpaceShip{


  constructor(pilot?: Pilot) {
    super('C3-205', './assets/space.png', pilot || null);
  }
}
