import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

export interface ImageSlider {
  id: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider', { static: true })
  imgSlider: ElementRef;
  selectedIndex = 0;
  constructor(private rd2: Renderer2) {}
  intervalId;
  ngOnInit() {}

  ngAfterViewInit(): void {
    if (this.intervalBySeconds <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalBySeconds * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }
}
