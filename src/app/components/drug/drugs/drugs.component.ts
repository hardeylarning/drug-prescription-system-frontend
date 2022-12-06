import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/model/drug';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss']
})
export class DrugsComponent implements OnInit {
  drugs: Drug[] = [];
  message: string = '';

  constructor(
    private drugService: DrugService
  ) {
    
  }

  ngOnInit(): void {
    this.message = this.drugService.getMessage();
    this.drugService.setMessage('');

    this.drugService.getDrugs().subscribe((data) => {
      this.drugs = data;
    });

    
  }

  protected delete(id: number) {
    this.drugService.deleteDrug(id).subscribe((data) => {
      this.drugService.setMessage('Drug deleted successfully!')
      window.location.reload();
      this.ngOnInit();
    });
  }

}
