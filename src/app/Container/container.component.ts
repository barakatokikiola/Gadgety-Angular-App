import { Component, ViewChild } from "@angular/core";
import { DemoComponent } from "../demo/demo.component";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerComponent{
  @ViewChild(DemoComponent, {static: true})  demoComp: DemoComponent;

}