import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output()
  readonly dark = new EventEmitter<boolean>();

  constructor(private router : Router) {}

  ngOnInit() {}

  toggleDarkTheme({ checked }: MatSlideToggleChange) {
    this.dark.emit(checked);
  }

  navigateTol(rota) {
    this.router.navigateByUrl(rota);
}
}
