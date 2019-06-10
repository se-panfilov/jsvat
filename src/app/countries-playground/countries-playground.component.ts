import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { countries, Country } from 'jsvat'

@Component({
  selector: 'jsvat-countries-playground',
  templateUrl: './countries-playground.component.html',
  styleUrls: ['./countries-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesPlaygroundComponent implements OnInit {

  public readonly countries: ReadonlyArray<Country> = countries
  public form: FormGroup

  @Output()
  public countriesChanged = new EventEmitter<ReadonlyArray<Country>>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array(this.createItems())
    })

    this.countriesChanged.emit(countries)

    this.form.valueChanges.subscribe(({ items }) => {
      this.countriesChanged.emit(this.getCountriesByCodes(items))
    })
  }

  // tslint:disable-next-line:readonly-array
  createItems(): Array<FormGroup> {
    return this.countries.map(c => {
      return this.fb.group({
        name: c.name,
        code: c.codes[0],
        isSelected: true
      })
    })
  }

  getCountriesByCodes(list: ReadonlyArray<CountryControl>): ReadonlyArray<Country> {
    return list.filter(item => item.isSelected).map(item => {
      return this.countries.find(c => c.codes[0] === item.code)
    })
  }

}

export interface CountryControl {
  name: string,
  code: string,
  isSelected: boolean
}
