import { CapitalDirective } from './capital.directive';

describe('CapitalDirective', () => {
  it('should create an instance', () => {
    const directive = new CapitalDirective({ nativeElement: document.createElement('input') });
    expect(directive).toBeTruthy();
  });
});
