import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import {
  checkVAT,
  countries,
  VatCheckResult
} from 'jsvat'

@Component({
  selector: 'jsvat-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public exampleResult: VatCheckResult | undefined
  readonly exampleForm: FormGroup = this.fb.group({
    vat: ''
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.exampleForm.get('vat')
      .valueChanges
      .subscribe(vat => this.updateExampleValue(vat))

    this.exampleForm.setValue({ vat: 'ATU00000024' })
  }

  updateExampleValue(vat: string | undefined): void {
    this.exampleResult = checkVAT(vat, countries)
  }


}
