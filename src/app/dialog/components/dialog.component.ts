import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        height: 100%;
      }
    `
  ]
})
export class DialogComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
