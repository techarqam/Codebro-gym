import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { AddSessionsComponent } from './add-sessions.component';
    
    describe('AddSessionsComponent', () => {
      let component: AddSessionsComponent;
      let fixture: ComponentFixture<AddSessionsComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ AddSessionsComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(AddSessionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    