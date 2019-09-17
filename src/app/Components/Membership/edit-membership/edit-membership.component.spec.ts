import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { EditMembershipComponent } from './edit-membership.component';
    
    describe('EditMembershipComponent', () => {
      let component: EditMembershipComponent;
      let fixture: ComponentFixture<EditMembershipComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ EditMembershipComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(EditMembershipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    