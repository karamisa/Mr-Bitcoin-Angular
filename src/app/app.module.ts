import { TuiRootModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { InputComponent } from './cmps/input/input.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { TuiAxesModule } from '@taiga-ui/addon-charts';
import {TuiLineChartModule} from '@taiga-ui/addon-charts';
import { TuiInputDateRangeModule } from '@taiga-ui/kit';
import { TuiLineDaysChartModule } from '@taiga-ui/addon-charts';
import {TuiCarouselModule} from '@taiga-ui/kit';
import { TuiIslandModule } from '@taiga-ui/kit';
import {TuiTagModule} from '@taiga-ui/kit';


@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    StatisticsPageComponent,
    AppHeaderComponent,
    TransferFundsComponent,
    SignupComponent,
    MovesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FontAwesomeModule,
    MatDividerModule,
    TuiRootModule,
    TuiAxesModule,
    TuiLineChartModule,
    TuiInputDateRangeModule,
    TuiLineDaysChartModule,
    TuiCarouselModule,
    TuiIslandModule,
    TuiTagModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
