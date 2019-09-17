import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { ViewMemberComponent } from './view-member.component';
    
    describe('ViewMemberComponent', () => {
      let component: ViewMemberComponent;
      let fixture: ComponentFixture<ViewMemberComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ViewMemberComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(ViewMemberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    