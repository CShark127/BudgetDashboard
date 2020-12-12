import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

type Institution = BudgetTypes.Institution;
type InstitutionDetailDocument = BudgetTypes.InstitutionDetailDocument;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private firestore: AngularFirestore) {}

  public getInstitutionDetails(): Observable<Institution[]> {
    return this.firestore
      .collection<Institution>('InstitutionDetails')
      .valueChanges({ idField: 'Id' });
  }

  // public getInstitutions(): Observable<Institution[]> {
  //   console.log('called');
  //   return this.firestore
  //     .collection<Institution>('Institutions')
  //     .valueChanges({ idField: 'Id' });
  // }

  public getAccounts() {
    return this.firestore.collection('Accounts').valueChanges();
  }

  public addInstitution(institution: InstitutionDetailDocument) {
    return this.firestore.collection('InstitutionDetails').add(institution);
  }
}
