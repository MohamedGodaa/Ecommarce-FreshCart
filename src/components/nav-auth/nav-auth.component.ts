import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})
export class NavAuthComponent {
  constructor(private _DarkModeService:DarkModeService){}
  onToggle(): void{
    this._DarkModeService.toggle()
  }
}
