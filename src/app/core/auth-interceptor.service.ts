import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { AuthStatusService } from '../auth/auth-status.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authStatus:AuthStatusService){}
  //req which is going to backend
  //interceptor is executed b/w applicatiom amd backend
  //next sends the request to backend like middleware 
  intercept(req:HttpRequest<any>,next:HttpHandler)
  {
    console.log("In Http Interceptor",req.url);
    const token=this.authStatus.getUserToken();
    
    //HttpRequest is immutable so  we will clone and make changes then forward new request
    let modifiedRequest;
    if(token)
    {
      modifiedRequest=req.clone(
        {
          headers:req.headers
          .append('x-auth-token',token)
          .append('Content-Type', 'application/json')
        });
    }
    else
    {
      modifiedRequest=req.clone(
        {
          headers:req.headers
          .append('Content-Type', 'application/json')
        });
    }
   return next.handle(modifiedRequest);
  }
}
