import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ModulesService} from "./service/modules.service";
import {Subsystem} from "./model/subsystem";
import {BehaviorSubject, combineLatest, map, startWith} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulesComponent {

  searchInput = new FormControl();

  modules$ = combineLatest([this.searchInput.valueChanges.pipe(startWith(null)), this.modulesService.modules$])
    .pipe(
      map(([filter, modules]) => {
        if (filter) {
          return modules.filter(module => module.name.includes(filter) || module.description.includes(filter));
        }
        return modules;
      })
    );

  constructor(private modulesService: ModulesService) { }

  redirectTo(module: Subsystem) {
    this.modulesService.moduleConfig(module.shortcut)
      .subscribe(({url}) => window.location.href = url)
  }

  search(event: KeyboardEvent): void {

  }
}
