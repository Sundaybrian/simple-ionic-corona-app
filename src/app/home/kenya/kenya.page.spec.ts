import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KenyaPage } from './kenya.page';

describe('KenyaPage', () => {
  let component: KenyaPage;
  let fixture: ComponentFixture<KenyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KenyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
