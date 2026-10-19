import { inject, Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';

interface ExampleData {
  id: number;
  name: string;
}

@Injectable()
class Example {
  resolve(id: string, name: string): ExampleData {
    return { id: parseInt(id), name: `Injectable ${name}` };
  }
}

export const exampleResolver: ResolveFn<ExampleData> = () => {
  const example = inject(Example);
  return example.resolve('1', 'Resolver');
};
