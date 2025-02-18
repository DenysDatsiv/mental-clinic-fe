import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitPageComponent} from './visit-page.component';
import {Router, RouterOutlet} from '@angular/router';
import {VisitRoutingModule} from './visit-routing.module';
import {Meta, Title} from '@angular/platform-browser';
import {ImportsModule} from '../../ shared/imports';


@NgModule({
  declarations: [
    VisitPageComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    VisitRoutingModule,
    ImportsModule
  ]
})
export class VisitPageModule implements OnInit {
  constructor(private meta: Meta, private title: Title, private router: Router) {
  }

  ngOnInit(): void {
    this.title.setTitle('Онлайн-консультації з психіатром та психологом | Ментальне здоров’я');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Отримайте якісну онлайн-консультацію від кваліфікованих психіатрів та психологів. Безпечне, конфіденційне середовище для вашого ментального здоров’я.'
      },
      {name: 'keywords', content: 'психолог онлайн, консультація психіатра, ментальне здоров’я, психотерапія'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }


}
