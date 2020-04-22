import { Directive, HostBinding } from '@angular/core';

/**
 * 指令可以理解为没有模版的组件，它需要一个宿主元素。
 * 推荐使用方括号 [] 指定 Selector，使它变成一个属性。
 */
@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';
}
