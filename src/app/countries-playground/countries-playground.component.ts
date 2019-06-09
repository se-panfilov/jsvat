import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
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
  // public readonly countries: ReadonlyArray<any> = [{ name: 'aaa', isSelected: 'aaa' }, { name: 'bbb', isSelected: false }]

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      vat: '',
      items: this.fb.array(this.createItems())
    })
  }

  createItems(): Array<FormGroup> {
    return this.countries.map(c => {
      return this.fb.group({
        name: c.name,
        isSelected: new Date().getMilliseconds() % 2 === 0
      })
    })
  }


}
