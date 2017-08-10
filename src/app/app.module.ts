import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ADF components
import { CoreModule } from 'ng2-alfresco-core';
import { DataTableModule } from 'ng2-alfresco-datatable';
import { ViewerModule } from 'ng2-alfresco-viewer';
import { DocumentListModule } from 'ng2-alfresco-documentlist';

// App components
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { DocumentlistComponent } from './documentlist/documentlist.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: 'documentlist', component: DocumentlistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    HomeComponent,
    ViewerComponent,
    DocumentlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    ),

    // ADF component modules
    CoreModule,
    DataTableModule,
    ViewerModule,
    DocumentListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
