import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { checkVAT, countries } from 'jsvat'
import { highlight, languages } from 'prismjs';

@Component({
  selector: 'jsvat-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public code: string | undefined
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
    const code = checkVAT(vat, countries)
    if (code) this.code = highlight(JSON.stringify(code, null, 2), languages.javascript, 'javascript')
  }


}
