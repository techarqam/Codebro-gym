import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { EditDiscountComponent } from './edit-discount.component';
    
    describe('EditDiscountComponent', () => {
      let component: EditDiscountComponent;
      let fixture: ComponentFixture<EditDiscountComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ EditDiscountComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(EditDiscountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    