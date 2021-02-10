import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LuPopoverModule } from '@lucca-front/ng/popover';
import { LuTooltipModule } from '@lucca-front/ng/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsService } from './infra';
import { ContactComponent } from './ui/contact';
import { HomeComponent } from './ui/home';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectModalComponent } from './ui/project-modal';
import { LuModalModule } from '@lucca-front/ng/modal';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent,
		ProjectModalComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		OverlayModule,
		LuTooltipModule,
		LuPopoverModule,
		MatTooltipModule,
		LuModalModule
	],
	providers: [
		ProjectsService
	],
	entryComponents: [
		ProjectModalComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
