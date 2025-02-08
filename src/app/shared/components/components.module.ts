import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoadingComponent } from './custom-loading/custom-loading.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForceUpdateModalComponent } from './force-update-modal/force-update-modal.component';
import { SearchMessageComponent } from './search-message/search-message.component';

@NgModule({
    declarations: [CustomLoadingComponent, ForceUpdateModalComponent, SearchMessageComponent],
    imports: [
        CommonModule, 
        FormsModule,
        IonicModule,
    ],
    exports: [CustomLoadingComponent, ForceUpdateModalComponent, SearchMessageComponent],
    providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    
})
export class SharedComponents { }