import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-ex-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input()
  title: string;
}
