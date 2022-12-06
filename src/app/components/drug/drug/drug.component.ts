import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from 'src/app/model/drug';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {

  id : any
  drug!: Drug 

  constructor(private route: ActivatedRoute,
    private drugService: DrugService) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
      this.drugService.getDrug(this.id).subscribe((data) => {
        this.drug = data
      })
    })
  }

}
