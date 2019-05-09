import { Component, AfterViewInit } from '@angular/core';
import { PrismService } from '../../Prism.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements AfterViewInit {

  public form: Object;
  public submission: Object;
  public options: Object;
  constructor(public prism: PrismService) {
    this.form = {
      _id:"5cd3af4df3389962709ad951", 
      components: [
      {
        type: 'textfield',
        label: 'FirstName',
        key: 'firstName',
        input: true
      },      
      {          
          label:"Submit", 
          action:"submit",                 
          type:"button",
          theme: 'primary',
      }
    ]};
   }

  ngAfterViewInit() {
    this.prism.init();
  }

  onSubmit(submission: any) {
    console.log(submission); // This will print out the full submission from Form.io API.
  }
}
