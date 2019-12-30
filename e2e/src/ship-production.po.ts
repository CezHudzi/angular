import { element, by, browser } from 'protractor';

export class ShipProduction {
  nagivateTo() {
    browser.get('/space');
  }

  setShipQuantity(numer: number) {
    const input = element(by.css('[formcontrolname="shipCount"]'));
    input.clear().then(() => input.sendKeys(numer));
  }

  setFighterType() {
    const radios = element.all(by.css(`[formcontrolname="shipType"]`));
    radios.first().click();
  }

  submitProduceForm() {
    const button = element(by.buttonText('Produkuj'));
    button.click();
  }

  getShipsCount() {
    const ships = element.all(by.css('app-space-ship'));
    return ships.count();
  }
}
