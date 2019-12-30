import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pilot, PilotAttrs} from './pilot';
import {environment} from '../../environments/environment.prod';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }


  getpilots(): Observable<Pilot[]> {

    return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/pilots`).pipe(
      map((data) => data.map((pilotAtts) => new Pilot(pilotAtts)))

    );
  }

  getPilot(id: number): Observable<Pilot> {
    return this.http.get<Pilot>(`${environment.apiUrl}/pilots/${id}`).pipe(
      map((pilotAtts) => new Pilot(pilotAtts))
    );
  }

   createPilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.post<PilotAttrs>(`${environment.apiUrl}/pilots`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

   updatePilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.put<PilotAttrs>(`${environment.apiUrl}/pilots/${data.id}`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

}
