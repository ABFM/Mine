import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { ProfileComponent } from '../home/profile/profile.component';
import { AddComponent } from '../home/add/add.component';
import { FriendsComponent } from '../home/friends/friends.component';
import { FriendComponent } from '../home/friends/friend/friend.component';
import { MyUrlsComponent } from '../home/my-urls/my-urls.component';
import { RouterModule, Routes } from '@angular/router';


  const appRouts: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent },
    { path: 'add', component: AddComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'friends/:id', component: FriendComponent },
    { path: 'myurls', component: MyUrlsComponent }
  ];


  @NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouts)
  ],
  exports: [RouterModule],
  declarations: []
})





export class RoutingModule { }
