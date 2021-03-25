import { BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { MeComponent } from './me/me.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent, 
    BackgroundComponent,
    MeComponent,
    InterestsComponent,
    SkillsComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
