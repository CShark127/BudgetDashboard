import { Component, OnInit } from '@angular/core';

import { InstitutionService } from '@shared/services/institution/institution.service';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {
  public inst: any;

  constructor(private instService: InstitutionService) {}

  ngOnInit(): void {
    this.inst = this.instService.institutionDetails;
  }
}
