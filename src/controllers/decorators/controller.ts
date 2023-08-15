import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { Metadatakeys } from "./MetadataKeys";

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        Metadatakeys.path,
        target.prototype,
        key
      );

      //console.log(`${routePrefix}${path}`, routeHandler);

      const method: Methods = Reflect.getMetadata(
        Metadatakeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(Metadatakeys.middleware, target.prototype, key) ||
        [];

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      } else {
        console.log("error occured");
      }
    }
  };
}
