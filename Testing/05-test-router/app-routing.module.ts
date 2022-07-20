import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  ContactsComponent,
  NewContactComponent,
  ContactDetailComponent,
  ContactEditComponent,
  PageNotFoundComponent,
} from "./components";

export const routes: Routes = [
  { path: "", component: ContactsComponent },
  { path: "add", component: NewContactComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "contact/:id", component: ContactDetailComponent },
  { path: "edit/:id", component: ContactEditComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
