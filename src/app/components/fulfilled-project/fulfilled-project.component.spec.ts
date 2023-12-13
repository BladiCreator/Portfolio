import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfilledProjectComponent } from './fulfilled-project.component';

describe('FullfilledProjectComponent', () => {
  let component: FulfilledProjectComponent;
  let fixture: ComponentFixture<FulfilledProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulfilledProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulfilledProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
