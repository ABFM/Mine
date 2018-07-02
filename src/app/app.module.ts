import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendComponent } from './home/friends/friend/friend.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './home/add/add.component';
import { MyUrlsComponent } from './home/my-urls/my-urls.component';
import { HomeComponent } from './home/home.component';
import { UrlsNavComponent } from './home/my-urls/urls-nav/urls-nav.component';
import { UrlComponent } from './home/my-urls/url/url.component';
import { ProfileComponent } from './home/profile/profile.component';
import { FriendsComponent } from './home/friends/friends.component';
import { CategoryComponent } from './home/my-urls/category/category.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from './services/data.service';
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    MyUrlsComponent,
    HomeComponent,
    UrlsNavComponent,
    UrlComponent,
    ProfileComponent,
    FriendsComponent,
    CategoryComponent,
    FooterComponent,
    FriendComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
