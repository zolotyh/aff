import { RouteMatcher } from '../RouteMatcher';

describe('RouteMatcher', () => {
  it('Should return empty result if route is not found', () => {
    const matcher = new RouteMatcher();
    const result = matcher.match()
    expect(result.isFound).toBe(false);
  });

  it('Should return result for simple route', () => {
    const simpleRoute = '/test';
    const routes = [simpleRoute];
    const matcher = new RouteMatcher(routes);
    const result = matcher.match(simpleRoute)
    expect(result.isFound).toBe(true);
    expect(result.routes[0].path).toBe(simpleRoute);
  });

  it('Should match /test/{testId}/ for /test/123321', () => {
    const simpleRoute = '/test/{testId}/';
    const eventPath = '/test/123321'
    const routes = [simpleRoute];
    const matcher = new RouteMatcher(routes);
    const result = matcher.match(eventPath);
    expect(result.isFound).toBe(true);
    expect(result.routes[0].path).toBe(simpleRoute);
  });

  it('should match / for /', () => {
    const simpleRoute = '/';
    const eventPath = '/'
    const routes = [simpleRoute];
    const matcher = new RouteMatcher(routes);
    const result = matcher.match(eventPath);
    expect(result.isFound).toBe(true);
    expect(result.routes[0].path).toBe(simpleRoute);
  })

  it('should match first route', () => {
    const firstRoute = '/test';
    const secondRoute = '/{test}';
    const eventPath = '/test'
    const routes = [firstRoute, secondRoute];
    const matcher = new RouteMatcher(routes);
    const result = matcher.match(eventPath);
    expect(result.isFound).toBe(true);
    expect(result.routes[0].path).toBe(firstRoute);
  })

});
