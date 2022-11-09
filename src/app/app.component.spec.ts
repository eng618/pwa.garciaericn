import { ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let app: ComponentFixture<AppComponent>;

  beforeEach(() => {
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the app', () => {
  //   expect(app).toBeTruthy();
  // });

  // it('should render title in a h1 tag', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Eric N. Garcia'
  //   );
  // });
});
