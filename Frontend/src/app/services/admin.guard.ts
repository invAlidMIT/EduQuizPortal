import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';



export const adminGuard: CanActivateFn = (route, state) => {

  const login=inject(LoginService);
  const router=inject(Router);

  if( login.isUserLoggedIn() && login.getUserRole()=="ADMIN"){
    return true;
  }
  else{
    router.navigate(['login']);
    return false;
  }
  
};
