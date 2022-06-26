import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { login } from 'src/app/interfaces/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginUsers: login;
  
  constructor(private loginService:UsersService, private router:Router) {}
  
  ngOnInit(): void {
  }
  Login(){
      this.loginService.getAllLogin().subscribe((resp)=>{
      this.loginUsers = resp;
      if(this.loginUsers.mensaje === 'OK'){
        this.router.navigateByUrl('/admin')
      }
    });
  }

}
