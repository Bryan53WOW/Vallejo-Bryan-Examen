import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../modules/home/home.component';
import { AboutComponent } from '../modules/about/about.component';
import { ContactComponent } from '../modules/contact/contact.component';
import { PostsComponent } from '../modules/posts/posts.component';
import { MessageService } from 'primeng/api';
import { CheckboxModule} from 'primeng/checkbox'
import { InputTextModule} from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    IconFieldModule,
    InputIconModule,
    MessageModule,
    ToastModule,
    PasswordModule,
    DividerModule,
    MenubarModule,
    InputTextareaModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
