import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthStatusService} from './../auth-status.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  loginForm:FormGroup;
  loading:boolean=false;
  isError=null;

  constructor(private authService:AuthStatusService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userEmail:new FormControl('',[Validators.required,Validators.email]),
      userPassword:new FormControl('',[Validators.required])
    })
   
  }
  ngOnDestroy()
  {
    this.isError=null;
  }

  onLogin()
  {
    //Clear previous Error if there is one
    this.isError=null;

    if(this.loginForm.invalid)
    {
      console.log("Not Valid");
    }
    else
    {
      this.loading=true;
      this.authService.login(
        {email:this.loginForm.value.userEmail,
        password:this.loginForm.value.userPassword}).subscribe((loginResponse)=>{
          this.loading=false;
          this.authService.setAuthenticationStatus(true);
          this.authService.setUserToken(loginResponse.token);
          console.log(loginResponse);
          
        },(error)=>{
          console.log(error);
          this.loading=false;
          this.authService.setAuthenticationStatus(false);
          this.authService.setUserToken(null); 
          this.isError=error.error[0].error;
          console.log(this.isError);
          
        })
    }
    
  }

}
