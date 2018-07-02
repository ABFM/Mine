import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './home/add/add.component';
import { MyUrlsComponent } from './home/my-urls/my-urls.component';
import { HomeComponent } from './home/home.component';
import { UrlsNavComponent } from './home/my-urls/urls-nav/urls-nav.component';
import { UrlComponent } from './home/my-urls/url/url.component';
import { ProfileComponent } from './home/profile/profile.component';
import { FriendsComponent } from './home/friends/friends.component';
import { CategoryComponent } from './home/my-urls/category/category.component';
import { DataService } from './services/data.service';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FriendComponent } from './home/friends/friend/friend.component';
import { SignupComponent } from './signup/signup.component';


const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'friends/:id', component: FriendComponent },
  { path: 'myurls', component: MyUrlsComponent }
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
    FooterComponent,
    FriendComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
