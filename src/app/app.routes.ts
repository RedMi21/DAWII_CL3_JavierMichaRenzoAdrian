import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './Pregunta1/question1/question1.component';
import { Question2Component } from './Pregunta2/question2/question2.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
  { path: '', redirectTo: '/question1', pathMatch: 'full' } 
];

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }

