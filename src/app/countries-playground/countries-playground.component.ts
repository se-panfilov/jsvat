import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { countries, Country } from 'jsvat'

@Component({
  selector: 'jsvat-countries-playground',
  templateUrl: './countries-playground.component.html',
  styleUrls: ['./countries-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesPlaygroundComponent {

  public readonly countries: ReadonlyArray<Country> = countries

  readonly form: FormGroup = this.fb.group({
    vat: ''
  })

  constructor(private fb: FormBuilder) {
  }

}
