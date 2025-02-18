import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAccordionBlockComponent } from './faq-accordion-block.component';

describe('FaqAccordionBlockComponent', () => {
  let component: FaqAccordionBlockComponent;
  let fixture: ComponentFixture<FaqAccordionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqAccordionBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqAccordionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
