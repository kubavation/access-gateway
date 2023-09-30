import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ModulesService} from "./service/modules.service";
import {Subsystem} from "./model/subsystem";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulesComponent {

  modules$ = this.modulesService.modules$;

  constructor(private modulesService: ModulesService) { }

  redirectTo(module: Subsystem) {
    this.modulesService.moduleConfig(module.shortcut)
      .subscribe(({url}) => window.location.href = url)
  }
}
