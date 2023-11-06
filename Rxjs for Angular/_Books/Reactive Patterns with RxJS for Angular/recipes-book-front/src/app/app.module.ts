import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesService } from './core/services/recipes.service';
import { HeaderComponent } from './components/header/header.component';
import { RecipesFilterComponent } from './recipes-filter/recipes-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesListComponent,
    HeaderComponent,
    RecipesFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
