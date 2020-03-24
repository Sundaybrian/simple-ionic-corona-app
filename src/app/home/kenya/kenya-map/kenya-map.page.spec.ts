import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KenyaMapPage } from './kenya-map.page';

describe('KenyaMapPage', () => {
  let component: KenyaMapPage;
  let fixture: ComponentFixture<KenyaMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenyaMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KenyaMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
