import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Institution = BudgetTypes.Institution;

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit {
  institutionDetails: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  institutions: Observable<any[]>;
  institutionsCollection: any;
  accounts: Observable<any[]>;

  constructor(fb: FormBuilder) {
    this.institutionDetails = fb.group({
      name: '',
      type: '',
      url: '',
      active: 'active',
      img: '',
    });

    // this.institutions = this.api
    //   .getInstitutions()
    //   .pipe(
    //     map((institution: Institution[]) =>
    //       institution.sort((a, b) => (a.Name > b.Name ? 1 : -1))
    //     )
    //   );
    // console.log(this.institutions);
    // console.log(this.accounts);
  }

  public OnSubmit() {
    this.institutionsCollection.add(this.institutionDetails.value);
  }

  ngOnInit(): void {}
}
