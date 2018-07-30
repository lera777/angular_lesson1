//импортируются дополнительные модули, сервисы, компоненты и тд
import { Component } from '@angular/core';

// Декоратор, описывает метаданные о компоненте
@Component({
  selector: 'app-root', // селектор под которым можно использовать эту компоненту
  templateUrl: './app.component.html', // шаблон для компоненты
  styleUrls: ['./app.component.css'] // стили которые используются в этой компоненте
})

//тело компоненты
export class AppComponent {
  title: string = 'My app';
}
