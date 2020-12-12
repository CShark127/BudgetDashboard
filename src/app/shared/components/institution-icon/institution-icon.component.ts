import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-institution-icon',
  templateUrl: './institution-icon.component.html',
  styleUrls: ['./institution-icon.component.scss'],
})
export class InstitutionIconComponent implements OnInit {
  @Input() InstitutionName: string;
  @Input() InstitutionAvatar: string;
  @Input() newInstitution: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
