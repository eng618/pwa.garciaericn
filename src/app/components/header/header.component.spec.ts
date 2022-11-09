import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should create', () => {
    const comp = new HeaderComponent();
    expect(comp).toBeTruthy();
  });
  it('should have a title of "Eric N. Garcia"', () => {
    const comp = new HeaderComponent();
    expect(comp.title).toEqual('Eric N. Garcia');
  });
});
