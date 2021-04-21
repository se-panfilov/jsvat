import { ChangeDetectionStrategy, Component } from '@angular/core'
import { highlight, languages } from 'prismjs'

@Component({
  selector: 'jsvat-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent {

  public readonly usageExampleCode: string = highlight(
    `import { checkVAT, belgium, austria } from 'jsvat';
// const { checkVAT, countries } = require('jsvat');

checkVAT('BE0411905847', [belgium]); // true: accept only Belgium VATs
checkVAT('BE0411905847', [belgium, austria]); // true: accept only Belgium or Austria VATs
checkVAT('BE0411905847', [austria]); // false: accept only Austria VATs`, languages.javascript, 'javascript')
}
