import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { DetailsMembershipComponent } from './details-membership.component';
    
    describe('DetailsMembershipComponent', () => {
      let component: DetailsMembershipComponent;
      let fixture: ComponentFixture<DetailsMembershipComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ DetailsMembershipComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(DetailsMembershipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    