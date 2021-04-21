import { ChangeDetectionStrategy, Component } from '@angular/core'
import { version } from '../../../package.json'

@Component({
  selector: 'jsvat-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  public version = version
}
