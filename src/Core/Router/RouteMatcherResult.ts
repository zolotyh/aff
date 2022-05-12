import { Route } from './Route';

export class RouterMatcherResult {
  constructor(public readonly routes: Route[] = []) {}

  get isFound(): boolean {
    return !!this.routes.length;
  }
}
