import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from 'src/app/model/drug';
import { Drug2 } from 'src/app/model/drug2';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.scss']
})
export class AddDrugComponent implements OnInit {
  title = ''
  image = ''
  description = ''
  sideEffect = ''
  dosage = ''
  age = ''

  file!: File
  constructor(private drugService: DrugService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    let drug = new Drug2(
      this.title,
      this.title + this.file.name,
      this.description,
      this.sideEffect,
      this.dosage,
      this.age,
      new Date(),
      new Date()
    )
    this.drugService.addDrug(drug).subscribe((data) => {
      this.drugService.setMessage("Drug has been added successfully!");
      this.router.navigateByUrl('/drugs');
    });
  }

  onChange(event:any) {
    this.file = event.target.files[0];
    console.log('Image name=> ', this.file);
    
}

}
