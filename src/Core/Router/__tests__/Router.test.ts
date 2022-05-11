import { Router } from '../Router';

describe('Router', () => {
  it('should handle /', () => {
    const rootPath = '/'
    const handler = jest.fn();
    const routes = [rootPath]
    const handlers = {[rootPath]:  handler}
    const router = new Router({routes, handlers});
    router.route(rootPath);
    expect(handler).toHaveBeenCalled();
  });
})
