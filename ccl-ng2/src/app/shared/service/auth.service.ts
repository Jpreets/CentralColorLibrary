// Angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


// Application internal
import { StorageType, StorageUtil } from '../util';
import { StorageKeys } from '../constant';


@Injectable()
export class AuthService {

    constructor(private _router: Router) { }

    public isLoggedIn() {
        let retValue = true;
        if (!StorageUtil.hasAttribute(StorageType.SESSION, StorageKeys.AUTH_TOKEN)) {
            this._router.navigate(['login']);
            retValue =  false;
        }
        return retValue;
    }
}