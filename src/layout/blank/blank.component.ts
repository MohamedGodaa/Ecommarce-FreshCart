import { Component } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {

  goToUp():void{
    window.scrollTo(0,0)
  }
}
