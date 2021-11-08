import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { HeroComponent } from './hero/hero.component';
import { TranslationComponent } from './translation/translation.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ServiceComponent,
    HeroComponent,
    TranslationComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ServiceComponent,
    HeroComponent,
    TranslationComponent,
  ],
})
export class ComponentsModule {}
