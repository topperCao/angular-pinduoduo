import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective {
  @Input()
  @HostBinding('style.width')
  @HostBinding('style.height')
  avatarSize = '1.5rem';

  @HostBinding('style.border-radius')
  radius = '50%';
  @HostBinding('style.object-fit')
  fitMode = 'cover';
}
