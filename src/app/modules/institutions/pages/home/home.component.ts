import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { InstitutionService } from '@shared/services/institution/institution.service';

type Institution = BudgetTypes.Institution;
type InstitutionDetailDocument = BudgetTypes.InstitutionDetailDocument;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public institutions: Observable<Institution[] | null>;

  constructor(private inst: InstitutionService) {}

  private sortInstitutionsByName(institutions: Institution[]) {
    if (institutions) {
      institutions.sort((a, b) => (a.Name > b.Name ? 1 : -1));
      return institutions;
    }
    return null;
  }

  ngOnInit() {
    this.institutions = this.inst.institutionDetails.pipe(
      map((institutions: Institution[]) =>
        this.sortInstitutionsByName(institutions)
      )
    );

    console.log(this.institutions);
    console.log('this.institutions');
  }

  // ngOnInit() {}
}
