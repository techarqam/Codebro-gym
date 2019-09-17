import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { ViewSessionsComponent } from './view-sessions.component';
    
    describe('ViewSessionsComponent', () => {
      let component: ViewSessionsComponent;
      let fixture: ComponentFixture<ViewSessionsComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ViewSessionsComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(ViewSessionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    