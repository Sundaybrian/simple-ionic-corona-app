import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestOfWorldPage } from './rest-of-world.page';

describe('RestOfWorldPage', () => {
  let component: RestOfWorldPage;
  let fixture: ComponentFixture<RestOfWorldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestOfWorldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestOfWorldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
