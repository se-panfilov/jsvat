import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { checkVAT, Country } from 'jsvat';
import { highlight, languages } from 'prismjs';

@Component({
  selector: 'jsvat-common-playground',
  templateUrl: './common-playground.component.html',
  styleUrls: ['./common-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonPlaygroundComponent implements OnInit {
  public code: string | undefined;
  public panelOpenState = false;

  public countries: ReadonlyArray<Country> = [];

  readonly form: FormGroup = this.fb.group({
    vat: ''
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.get('vat')
      .valueChanges
      .subscribe(vat => this.updateExampleValue(vat, this.countries));

    this.form.setValue({ vat: 'ATU00000024' });
  }

  updateExampleValue(vat: string | undefined, countries: ReadonlyArray<Country>): void {
    const code = checkVAT(vat, countries);
    const codeStr = JSON.stringify(code, null, 2).replace(/"(\S+)":/g, '$1:');
    if (code) this.code = highlight(codeStr, languages.javascript, 'javascript');
  }

  onCountriesListUpdated(list: ReadonlyArray<Country>): void {
    this.countries = list;
    this.updateExampleValue(this.form.get('vat').value, this.countries);
  }

  setCode(vat: string): void {
    this.form.get('vat').patchValue(vat);
  }
}
