import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ServiceComponent,
    HeroComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ServiceComponent,
    HeroComponent,
  ],
})
export class ComponentsModule {}
