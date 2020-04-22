import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/shared';
import { HomeService } from 'src/app/home';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {
  ad$: Observable<Ad>;

  products$: Observable<Product[]>;

  constructor(private service: HomeService) {}

  ngOnInit() {
    this.ad$ = this.service.getAdByTab('men').pipe(
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
    this.products$ = this.service.getProductsByTab('men');
  }
}
