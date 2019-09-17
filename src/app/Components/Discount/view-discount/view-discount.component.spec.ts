import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { ViewDiscountComponent } from './view-discount.component';
    
    describe('ViewDiscountComponent', () => {
      let component: ViewDiscountComponent;
      let fixture: ComponentFixture<ViewDiscountComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ViewDiscountComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(ViewDiscountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    