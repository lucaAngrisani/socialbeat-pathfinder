import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { testMock } from './test/testMock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  testMock.forEach((test) => {
    it('testMap', async () => {
      component.idToStart = test.idInput;
      component.jsonInput = test.jsonInput;
      component.objToFindInput = test.objInput;
      let res = await component.generateOutput();
      console.log(JSON.stringify(res));
      expect(test.result).toEqual(res);
    });
  });
});
