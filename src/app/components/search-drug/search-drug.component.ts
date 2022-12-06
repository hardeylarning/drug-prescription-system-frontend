import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/model/drug';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-search-drug',
  templateUrl: './search-drug.component.html',
  styleUrls: ['./search-drug.component.scss']
})
export class SearchDrugComponent implements OnInit {
  drugs: Drug[] = []
  search = ''
  isRequested = false

  constructor(private drugService: DrugService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.drugService.searchDrugs(this.search).subscribe(
      {
        next: drugs => {
          this.drugs = drugs
          // this.isRequested = false
        },
        error: err => {
          console.log('Error:=> ',err);
          this.isRequested = true
        },
        complete: () => console.log('Completed!')
      }
    )
  }

}
