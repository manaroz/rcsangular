import { Country } from './country';

describe('Country', () => {
  it('should create an instance', () => {
    const country = new Country('Test Country', 'TC', 12345);
    expect(country).toBeTruthy();
  });
});