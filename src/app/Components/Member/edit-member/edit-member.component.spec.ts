import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { EditMemberComponent } from './edit-member.component';
    
    describe('EditMemberComponent', () => {
      let component: EditMemberComponent;
      let fixture: ComponentFixture<EditMemberComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ EditMemberComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(EditMemberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    