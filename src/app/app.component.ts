import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import {
  austria,
  belgium,
  bulgaria,
  checkVAT,
  croatia,
  cyprus,
  czechRepublic,
  denmark,
  estonia,
  europe,
  finland,
  france,
  germany,
  greece,
  hungary,
  ireland,
  italy,
  latvia,
  lithuania,
  luxembourg,
  malta,
  netherlands,
  norway,
  poland,
  portugal,
  romania,
  russia,
  serbia,
  slovakiaRepublic,
  slovenia,
  spain,
  sweden,
  switzerland,
  unitedKingdom,
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
    this.exampleResult = checkVAT(vat, [
      austria,
      belgium,
      bulgaria,
      switzerland,
      cyprus,
      czechRepublic,
      germany,
      denmark,
      greece,
      spain,
      europe,
      estonia,
      finland,
      france,
      unitedKingdom,
      croatia,
      hungary,
      ireland,
      italy,
      latvia,
      lithuania,
      luxembourg,
      malta,
      netherlands,
      norway,
      poland,
      portugal,
      romania,
      russia,
      serbia,
      slovenia,
      slovakiaRepublic,
      sweden
    ])
  }


}
