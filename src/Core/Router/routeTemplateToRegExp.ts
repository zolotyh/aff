const variableRegexp = /\{([a-zA-Z\d]+)}/;

export const routeTemplateToRegExp = (routePath: string): string => {
  return routePath.split('/').map((item) => {
    const emptyStringRegExp = /\s/g;
    const emptyValue = '';
    const matchList = item.replace(emptyStringRegExp, emptyValue).match(variableRegexp);
    if (matchList) {
      return `(?<${matchList[1]}>[a-zA-Z0-9]{1,})`
    }
    return item;
  }).join('/');
}
