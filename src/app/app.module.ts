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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


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
    RouterModule.forRoot(appRouts),
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
