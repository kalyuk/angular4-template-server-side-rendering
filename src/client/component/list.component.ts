import {Component} from "@angular/core";

@Component({
  selector: "list",
  template: `
      <ul>
          <li>{{title}}</li>
      </ul>`
})
export class ListComponent {
  private title = "test list";
}
