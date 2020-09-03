import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output()
  readonly dark = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  toggleDarkTheme({ checked }: MatSlideToggleChange) {
    this.dark.emit(checked);
  }
}
