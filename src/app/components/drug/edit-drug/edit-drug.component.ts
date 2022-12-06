import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Drug } from 'src/app/model/drug';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.scss'],
})
export class EditDrugComponent implements OnInit {
  id: any;
  form!: FormGroup;
  drug!: Drug;

  title = '';
  image = '';
  description = '';
  sideEffect = '';
  dosage = '';
  age = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private drugService: DrugService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
      this.drugService.getDrug(this.id).subscribe((data) => {
        this.drug = data;
        this.title = data.title;
        this.description = data.description;
        this.sideEffect = data.sideEffect;
        this.dosage = data.dosage;
        this.age = data.age;
        this.form = this.fb.group({
          title: new FormControl(this.title),
          description: new FormControl(this.description),
          sideEffect: new FormControl(this.sideEffect),
          dosage: new FormControl(this.dosage),
          age: new FormControl(this.age),
        });
      });
    });
  }

  onSubmit() {
    this.drug.title = this.form.value.title;
    this.drug.description = this.form.value.description;
    this.drug.sideEffect = this.form.value.sideEffect;
    this.drug.dosage = this.form.value.dosage;
    this.drug.age = this.form.value.age;
    this.drugService.updateDrug(this.id, this.drug).subscribe((res) => {
      this.drugService.setMessage("Drug updated successfully!");
      this.router.navigateByUrl('/drugs');
    });
  }
}
