import {FormControl} from '@angular/forms';
import {ajax} from 'rxjs/ajax';
import {environment} from '../../environments/environment.prod';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

export class PilotValidators {

  static pilotName(formControl: FormControl) {

    return !formControl.value ||  /^[A-Z]/.test(formControl.value) ? null : {pilotName: true};
  }


  static pilotForbidden(formControl: FormControl) {
    if (!formControl.value) { return of(null); }
    const url = `${environment.apiUrl}/forbidden-names?name=${formControl.value}`;
    return ajax.getJSON<Array<{name: string}>>(url).pipe(
      map((pilots) => pilots.length > 0 ? {pilotForbidden: true} : null)
    );
  }


}
