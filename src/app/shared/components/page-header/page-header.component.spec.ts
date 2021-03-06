import { TestBed, async } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header.component';

describe('Page Header Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageHeaderComponent
      ],
    }).compileComponents();
  }));

  it('deve criar o Page Header Component', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    const pageHeader = fixture.debugElement.componentInstance;
    expect(pageHeader).toBeTruthy();
  });
});
