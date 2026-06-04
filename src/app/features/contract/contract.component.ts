import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../shared/primeng-imports.module';
import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule],
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss',
})
export class ContractComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updatePage({
      title: "Публічний договір (оферта) — Онлайн центр ментального здоров'я Євгена Скрипника",
      description: "Публічний договір про надання інформаційних послуг онлайн центром ментального здоров'я Євгена Скрипника. Умови надання консультацій, оплати та повернення коштів.",
      canonical: '/contract',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: "Публічний договір — Онлайн центр ментального здоров'я",
        url: 'https://doctor-skripnik.com.ua/contract',
        description: "Публічний договір про надання інформаційних послуг ФОП Скрипник Є.В.",
        inLanguage: 'uk',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Головна', item: 'https://doctor-skripnik.com.ua/' },
            { '@type': 'ListItem', position: 2, name: 'Публічний договір', item: 'https://doctor-skripnik.com.ua/contract' },
          ],
        },
      },
    });
  }
}
