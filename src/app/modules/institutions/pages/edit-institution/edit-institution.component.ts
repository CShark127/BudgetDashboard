import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { InstitutionService } from '@shared/services/institution/institution.service';
import { Observable } from 'rxjs';

type InstitutionDetailDocument = BudgetTypes.InstitutionDetailDocument;

@Component({
  selector: 'app-edit-institution',
  templateUrl: './edit-institution.component.html',
  styleUrls: ['./edit-institution.component.scss'],
})
export class EditInstitutionComponent implements OnInit {
  public institutionId: string;
  public institutionDetails: Observable<InstitutionDetailDocument[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instService: InstitutionService
  ) {}

  ngOnInit(): void {
    this.institutionId = this.route.snapshot.queryParamMap.get('id');
    this.getInstitutionDetails();
  }

  getInstitutionDetails() {
    this.institutionDetails = this.instService.institutionDetails.pipe(
      filter(data => data != null),
      map((institutions: InstitutionDetailDocument[]) =>
        institutions.filter(
          (institution: InstitutionDetailDocument) =>
            institution.Id == this.institutionId
        )
      )
    );
  }
}
