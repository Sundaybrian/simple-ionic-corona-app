import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfricaMapPage } from './africa-map.page';

describe('AfricaMapPage', () => {
  let component: AfricaMapPage;
  let fixture: ComponentFixture<AfricaMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfricaMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
