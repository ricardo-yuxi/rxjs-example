import { HttpModule } from '@angular/http';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
