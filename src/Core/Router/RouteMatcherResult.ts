import {Route} from "./Route";

export class RouterMatcherResult {
  constructor(private readonly routes: Route [] = []){}

  get isFound(): boolean{
    return !!this.routes.length;
  }
}
