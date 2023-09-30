import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subsystem} from "../model/subsystem";
import {environment} from "../../../environments/environment";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  modules$ = this.http.get<Subsystem[]>(`${environment.modulesUrl}/modules`);

  constructor(private http: HttpClient) {
  }

  //mock
  public moduleConfig(module: string): Observable<string> {
    return of("http://localhost:4200");
  }

}
