import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { AddMembershipComponent } from './add-membership.component';
    
    describe('AddMembershipComponent', () => {
      let component: AddMembershipComponent;
      let fixture: ComponentFixture<AddMembershipComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ AddMembershipComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(AddMembershipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    