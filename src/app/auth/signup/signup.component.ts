import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthStatusService } from '../auth-status.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  loading:boolean=false;
  isError=null;

  constructor(private authService:AuthStatusService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      userEmail:new FormControl('',[Validators.required,Validators.email]),
      userPassword:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
   
  }
  ngAfterViewInit()
  {
    
  }
  onSignup()
  {
    console.log(this.signupForm);
    //Clearing Prev error before we call again
    this.isError=null;
    if(this.signupForm.invalid)
    {
      console.log("Not Valid");
    }
    else
    {
      this.loading=true;
      const payload={
        email:this.signupForm.value.userEmail,
        name:this.signupForm.value.name,
        password:this.signupForm.value.userPassword
      };
      this.authService.register(payload).subscribe((signupResponse)=>{
        console.log(signupResponse);
        this.loading=false;
        this.authService.setUserToken(signupResponse.token);
        this.authService.setAuthenticationStatus(true);
        
      },(error)=>{
        console.log(error);
        this.loading=false;
        this.isError=error.error[0].error;
      })
     
     
    }
    
  }
}
