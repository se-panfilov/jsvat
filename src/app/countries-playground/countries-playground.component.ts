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

      // TODO (S.Panfilov) sometimes it's not a countries, but form values

      console.info(items)
      this.countriesChanged.emit(items)
    })
  }

  createItems(): Array<FormGroup> {
    return this.countries.map(c => {
      return this.fb.group({
        name: c.name,
        isSelected: true
      })
    })
  }


}
