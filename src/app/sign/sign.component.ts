import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
 
  constructor(
    private http: HttpClient
  ) { }


  Email = "";
  Password = "";
  MySign(){
    this.http.post('https://piet-login-app.herokuapp.com/user/login',
    {
        email : this.Email,
        password: this.Password
    }
  ).subscribe(
      function(rec){
      console.log(rec)
    }
  )
  }

  ngOnInit() {
    
  }
}
