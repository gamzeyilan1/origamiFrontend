import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {TaskModuleModule} from "./task-module/task-module.module";
import {TaskComponent} from "./task-module/task/task.component";

const routes: Routes = [{ path: 'task-module', loadChildren: () => import('./task-module/task-module.module').then(m => m.TaskModuleModule) }];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TaskModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
