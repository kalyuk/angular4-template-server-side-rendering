import {NgModule, enableProdMode} from "@angular/core";
import {ServerModule} from "@angular/platform-server";
import {AppComponent} from "../client/app.component";
import {AppModule} from "../client/app.module";
import {ResourceLoader} from "@angular/compiler";

enableProdMode();

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppModule, ServerModule],
  providers: [
    {provide: ResourceLoader, useClass: ResourceLoader}
  ]
})
export class ServerAppModule  {
}
