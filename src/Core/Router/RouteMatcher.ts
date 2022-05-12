import { RouterMatcherResult } from './RouteMatcherResult';
import { Route } from './Route';

export class RouteMatcher {
  private routes: Route[];

  constructor(private pathTemplates: string[] = []) {
    this.routes = pathTemplates.map(Route.fromPath);
  }
  match(path = '') {
    const pathList = this.findRoutes(path);
    return new RouterMatcherResult(pathList);
  }
  private findRoutes(eventPath: string): Route[] {
    return this.routes.filter(routeTemplate =>
      this.isMatch(eventPath, routeTemplate),
    );
  }

  private isMatch(input: string, route: Route) {
    return route.match(input);
  }
}
