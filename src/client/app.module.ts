import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ListComponent} from "./component/list.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [BrowserModule.withServerTransition({
    appId: "root"
  }),
    RouterModule.forRoot([
      {
        component: ListComponent,
        path: "list"
      }
    ])],
  providers: []
})
export class AppModule {
}

