import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { MyUrlsComponent } from './my-urls/my-urls.component';
import { HomeComponent } from './home/home.component';
import { UrlsNavComponent } from './my-urls/urls-nav/urls-nav.component';
import { UrlComponent } from './my-urls/url/url.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { CategoryComponent } from './category/category.component';
import { DataService } from './services/data.service';
import { FooterComponent } from './footer/footer.component';

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'myurls', component: MyUrlsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'friends', component: FriendsComponent}
];

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
