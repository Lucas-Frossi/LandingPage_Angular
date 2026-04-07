import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterForms } from './newsletter-forms';

describe('NewsletterForms', () => {
  let component: NewsletterForms;
  let fixture: ComponentFixture<NewsletterForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterForms],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
