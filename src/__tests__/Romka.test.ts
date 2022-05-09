import { Romka } from "../Romka";

describe('Simple test', () => {
  it('simple test', () => {
    const romka = new Romka();
    expect(typeof romka).toEqual('object');
  })
});
