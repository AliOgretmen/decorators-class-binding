import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoratorsComponent } from './componets/decorators/decorators.component';
import { ClassBindingComponent } from './componets/class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorsComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
