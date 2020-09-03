import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;
  constructor() {}
  @HostBinding('class')
  get themeMode() {
    return this.isDarkTheme ? 'theme-dark' : 'theme-light';
  }

  switchMode(isDarkMode: boolean) {
    this.isDarkTheme = isDarkMode;
  }

  ngOnInit() {}
}
