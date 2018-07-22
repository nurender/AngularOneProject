import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { LinkComponent } from './link/link.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    LinkComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [ 
        {
          path : 'Home',
          component : HomeComponent
        },
        {
          path : 'sign',
          component : SignComponent
        },
        {
          path : 'link',
          component : LinkComponent
        },
        {
          path : 'sign-up',
          component : SignUpComponent
        }
      ]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
