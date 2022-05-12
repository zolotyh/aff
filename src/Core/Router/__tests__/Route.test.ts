import { Route } from '../Route';

describe('Route', () => {
  it('should work with /{id} and /10', () => {
    const route = new Route('/{id}');
    expect(route.match('/10')?.groups?.id).toBe('10');
  });
  it('should work with /{id}/{id2} and /10/20', () => {
    const route = new Route('/{id}/${id2}');
    const match = route.match('/10/20')?.groups;
    expect(match?.id).toBe('10');
    expect(match?.id2).toBe('20');
  });
  it('should work with /test/{id}/{id2} and /10/20', () => {
    const route = new Route('test/{id}/${id2}');
    const match = route.match('test/10/20')?.groups;
    expect(match?.id).toBe('10');
    expect(match?.id2).toBe('20');
  });
});
