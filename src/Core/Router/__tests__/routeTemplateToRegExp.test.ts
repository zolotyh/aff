import { routeTemplateToRegExp } from "../routeTemplateToRegExp";

describe('routeTemplateToRegExp', () => {
  it('should work with /', () => {
    expect(routeTemplateToRegExp('/')).toEqual('\/');
  });
  it('should work with /test/test', () => {
    expect(routeTemplateToRegExp('/')).toEqual('\/');
  });
  it('should work with /test/test/{testId}', () => {
    expect(routeTemplateToRegExp('/test/test/{testId}')).toEqual('/test/test/(?<testId>[a-zA-Z0-9]{1,})');
  });
  it('should work with/test/test/{ testId }', () => {
    expect(routeTemplateToRegExp('/test/test/{ testId }')).toEqual('/test/test/(?<testId>[a-zA-Z0-9]{1,})');
  });
  it('should work with /test/{hello}/test/{ testId }', () => {
    expect(routeTemplateToRegExp('/test/{hello}/test/{ testId }')).toEqual('/test/(?<hello>[a-zA-Z0-9]{1,})/test/(?<testId>[a-zA-Z0-9]{1,})');
  });
});
