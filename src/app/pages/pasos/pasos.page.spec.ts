import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasosPage } from './pasos.page';

describe('PasosPage', () => {
  let component: PasosPage;
  let fixture: ComponentFixture<PasosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
