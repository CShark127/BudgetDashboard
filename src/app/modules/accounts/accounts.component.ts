import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  institutions: Observable<any[]>;
  accounts: Observable<any[]>;

  constructor(fb: FormBuilder, private firestore: AngularFirestore) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    this.institutions = firestore.collection('Institutions').valueChanges();
    this.accounts = firestore.collection('AccountsHistory').valueChanges();
    console.log(this.institutions);
    console.log(this.accounts);
  }

  ngOnInit(): void {}
}
