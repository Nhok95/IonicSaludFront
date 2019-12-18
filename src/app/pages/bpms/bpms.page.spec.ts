import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BpmsPage } from './bpms.page';

describe('BpmsPage', () => {
  let component: BpmsPage;
  let fixture: ComponentFixture<BpmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BpmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
