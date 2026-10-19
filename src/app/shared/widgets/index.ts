import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting-widget',
  standalone: true,
  template: '<p>Hello, {{ name }}!</p>',
})
export class GreetingWidgetComponent {
  @Input() name = 'World';
}

@Component({
  selector: 'app-counter-widget',
  standalone: true,
  template: `
    <button type="button" (click)="count = count - 1">−</button>
    <span>{{ count }}</span>
    <button type="button" (click)="count = count + 1">+</button>
  `,
})
export class CounterWidgetComponent {
  count = 0;
}
