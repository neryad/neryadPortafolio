import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import {  ProjectsPageComponent } from './pages/projects/projects.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ComponentsModule } from '../components/components.module';
import { AppsComponent } from './components/apps/apps.component';
//import { TranslationComponent } from './translation/translation.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProjectsPageComponent, AppsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
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
})
export class ProjectsPageModule {}
