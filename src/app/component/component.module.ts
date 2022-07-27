import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GoogauthComponent } from "./googauth/googauth.component";
import {FirebaseUIModule} from 'firebaseui-angular';

@NgModule({
    declarations:[GoogauthComponent],
    imports:[
        CommonModule,
        RouterModule,
        IonicModule,
        FirebaseUIModule.forFeature({tosUrl: 'COMPONENT_MODULE'}),
    ],
    exports:[GoogauthComponent]
})
export class ComponentModule {}