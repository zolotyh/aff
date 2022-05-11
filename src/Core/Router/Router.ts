import { RouteMatcher } from './RouteMatcher';


type HandlerReturnType = Promise<unknown> | unknown | void;

type RouteHandler =() => HandlerReturnType;

export type RouterArguments = {
  RouteMatcherClass?: typeof RouteMatcher,
  routes: string[],
  handlers: Record<string, RouteHandler>
}

export class Router {
  private routeMatcher: RouteMatcher;
  private handlers: Record<string, RouteHandler>;

  constructor({RouteMatcherClass = RouteMatcher, routes = [], handlers = {}}: RouterArguments) {
    this.routeMatcher = new RouteMatcherClass(routes)
    this.handlers = handlers;
  }
  async route(path: string): Promise<unknown> {
    const result = this.routeMatcher.match(path);
    return this.handlers[result.routes[0].path]();
  }
}
