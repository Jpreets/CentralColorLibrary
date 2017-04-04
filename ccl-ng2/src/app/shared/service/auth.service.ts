// Angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Application internal
import { StorageType, StorageUtil, HttpUtil } from '../util';
import { ExceptionRegistry, API_ENDPOINTS, StorageKeys } from './../constant';
import { LoginRequest, LoginResponse } from './../model';

@Injectable()
export class AuthService {

    constructor(private _router: Router, private _http: Http) { }

    public isLoggedIn() {
        let retValue = true;
        if (!StorageUtil.hasAttribute(StorageType.SESSION, StorageKeys.AUTH_TOKEN)) {
            this._router.navigate(['login']);
            retValue =  false;
        }
        return retValue;
    }

    public authenticate(loginRequest: LoginRequest): Observable<LoginResponse> {
    if (!loginRequest) {
         return;
    };

    return this._http
      .post(API_ENDPOINTS.AUTHENTICATION_ENDPOINT, loginRequest)
      .map((response: Response) => HttpUtil.extractData<LoginResponse>(response))
      .catch((err: any, observable: Observable<LoginResponse>) => {
        return HttpUtil.transformErrorResponse(err, {
          401: ExceptionRegistry.UNAUTH_ACC_DENIED
        });
      });
  }
}
