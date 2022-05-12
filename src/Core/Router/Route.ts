import { routeTemplateToRegExp } from './routeTemplateToRegExp';

export class Route {
  static fromPath(path: string) {
    return new Route(path);
  }

  private readonly regExp: RegExp;

  constructor(public readonly path: string) {
    const cleanPath = Route.removeLastSlash(path);
    this.regExp = new RegExp(routeTemplateToRegExp(cleanPath), 'g');
  }

  private static removeLastSlash(input: string): string {
    if (input.endsWith('/')) {
      return input.replace(/\/$/, '');
    }
    return input;
  }

  public match(routePath: string): RegExpMatchArray | null {
    return this.regExp.exec(routePath);
  }
}
