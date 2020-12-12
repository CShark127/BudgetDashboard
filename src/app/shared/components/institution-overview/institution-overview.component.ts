import { Component, Input, OnInit } from '@angular/core';
import { CurrencyDisplayPipe } from '../../pipes/currency-display.pipe';

type Account = BudgetTypes.Account;

@Component({
  selector: 'app-institution-overview',
  templateUrl: './institution-overview.component.html',
  styleUrls: ['./institution-overview.component.scss'],
})
export class InstitutionOverviewComponent implements OnInit {
  @Input() institutionName: string;
  @Input() institutionType: string;
  @Input() institutionAvatar: string;
  @Input() institutionUrl: string;
  @Input() accounts: Account[];

  constructor() {}

  ngOnInit(): void {}
}
