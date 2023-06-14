import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";

@Injectable()
export class CekLevelGuard implements CanActivate {
    canActivate(routes: ActivatedRouteSnapshot) {
        console.log(routes);
        return false;
    }
}