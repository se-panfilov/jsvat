import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { checkVAT, countries } from 'jsvat'
import { highlight, languages } from 'prismjs'

@Component({
  selector: 'jsvat-common-playground',
  templateUrl: './common-playground.component.html',
  styleUrls: ['./common-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonPlaygroundComponent implements OnInit {
  public code: string | undefined

  readonly form: FormGroup = this.fb.group({
    vat: ''
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.get('vat')
      .valueChanges
      .subscribe(vat => this.updateExampleValue(vat))

    this.form.setValue({ vat: 'ATU00000024' })
  }

  updateExampleValue(vat: string | undefined): void {
    const code = checkVAT(vat, countries)
    const codeStr = JSON.stringify(code, null, 2).replace(/"(\S+)":/g, '$1:')
    if (code) this.code = highlight(codeStr, languages.javascript, 'javascript')
  }
}
