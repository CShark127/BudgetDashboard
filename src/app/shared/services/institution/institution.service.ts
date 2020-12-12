import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '@shared/services/api/api.service';

type InstitutionDetailDocument = BudgetTypes.InstitutionDetailDocument;

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  private _institutionDetails = new BehaviorSubject<InstitutionDetailDocument[]>(null);
  public institutionDetails = this._institutionDetails.asObservable();

  constructor(private api: ApiService) {
    this.getData();
  }

  getData() {
    this.api.getInstitutionDetails().subscribe({
      next: (data: InstitutionDetailDocument[]) =>
        this._institutionDetails.next(data),
    });
  }

}
