//Consolidating angualr material code at one page
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdListModule,OverlayContainer} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule],
  exports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule],
})

export class CustomMaterialComponent { 
	 constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'deeppurple-amber';
  }
}