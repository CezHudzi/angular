import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotRoomComponent } from './pilot-room.component';
import {Component, Injectable, Input} from '@angular/core';
import {Pilot} from '../pilot';
import {PilotService} from '../pilot.service';
import { RouterTestingModule } from '@angular/router/testing';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';


@Component({
  selector: 'app-pilot',
  template: 'pilot {{pilot.firstName}} <ng-content></ng-content>'
})
class PilotMockComponent {
  @Input() pilot: Pilot;
}


@Injectable()
class PilotServiceMock extends PilotService {
  constructor() {
    super(null);
  }
}


fdescribe('PilotRoomComponent', () => {
  let component: PilotRoomComponent;
  let fixture: ComponentFixture<PilotRoomComponent>;
  let pilotService: PilotService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PilotRoomComponent, PilotMockComponent ],
      providers: [{provide: PilotService, useClass: PilotServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    pilotService = TestBed.get(PilotService);
    fixture = TestBed.createComponent(PilotRoomComponent);
    component = fixture.componentInstance;
  });


  describe('when pilots fetched successfully', () => {
    let pilot: Pilot;

    beforeEach(() => {
      pilot = new Pilot({id: 1, firstName: 'Mike', lastName: 'Tomsky'});
      spyOn(pilotService, 'getpilots').and.returnValue(of([pilot]));
      spyOn(component.selected, 'emit');
      fixture.detectChanges();
    });

    it('should display pilots', () => {
      expect(fixture.nativeElement.textContent).toContain('Mike');
    });

    describe('when pilot is being selected', () => {

      beforeEach(() => {
        const selectButton = fixture.debugElement.query(By.css('.select-button'));
        selectButton.nativeElement.click();
      });

      it('should store selected pilot', () => {
        expect(component.selectedPilot).toBe(pilot);
      });
      it('should emit pilot', () => {
        expect(component.selected.emit).toHaveBeenCalledWith(pilot);
      });

    });




  });




});
