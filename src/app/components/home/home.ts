import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from "@angular/common";
import { BtnPrimary } from '../btn-primary/btn-primary';
import { NewsletterForms } from '../newsletter-forms/newsletter-forms';
import { Benefits } from '../benefits/benefits';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    Header,
    BtnPrimary,
    NewsletterForms,
    Benefits,
    Footer
  ],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home { }
