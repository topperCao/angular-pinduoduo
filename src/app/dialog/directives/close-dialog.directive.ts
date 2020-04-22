import { Directive, HostListener } from '@angular/core';
import { DialogService } from '../services';

@Directive({
  selector: '[appCloseDialog]'
})
export class CloseDialogDirective {
  constructor(private dialogService: DialogService) {}
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.dialogService.close();
  }
}
