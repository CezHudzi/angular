export interface PilotAttrs {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export class Pilot {

  static defaultImageUrl = '/assets/unknown.png';

  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;



  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(value: string) {

    const names = value.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];

  }

}
