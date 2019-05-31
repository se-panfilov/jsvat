import { Component } from '@angular/core';
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
  unitedKingdom, VatCheckResult
} from 'jsvat/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inputVat: string = 'ATU00000024';

  public getCheckResult(): VatCheckResult {
    return checkVAT(this.inputVat, [austria,
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
    ]);
  }

}
