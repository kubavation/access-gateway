import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subsystem} from "../model/subsystem";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {SubsystemConfig} from "../model/subsystem-config";

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  modules$ = this.http.get<Subsystem[]>(`${environment.modulesUrl}/modules`);

  constructor(private http: HttpClient) {
  }

  public moduleConfig(module: string): Observable<SubsystemConfig> {
    return this.http.get<SubsystemConfig>(`${environment.modulesUrl}/modules/${module}/config`)
  }

}
