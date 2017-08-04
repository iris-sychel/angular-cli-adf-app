import { Component } from '@angular/core';
import { ObjectDataTableAdapter } from 'ng2-alfresco-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = new ObjectDataTableAdapter(
    // data
    [
      { id: 1, name: 'Name 1' },
      { id: 2, name: 'Name 2' }
    ],
    // schema
    [
      {
        type: 'text',
        key: 'id',
        title: 'Id',
        sortable: true
      },
      {
        type: 'text',
        key: 'name',
        title: 'Name',
        cssClass: 'full-width',
        sortable: true
      }
    ]
  );
}
