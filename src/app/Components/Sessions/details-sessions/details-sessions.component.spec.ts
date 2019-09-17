import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { DetailsSessionsComponent } from './details-sessions.component';
    
    describe('DetailsSessionsComponent', () => {
      let component: DetailsSessionsComponent;
      let fixture: ComponentFixture<DetailsSessionsComponent>;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ DetailsSessionsComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(DetailsSessionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    