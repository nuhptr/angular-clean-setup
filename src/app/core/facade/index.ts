import { Injectable, signal } from '@angular/core';

/** A small example of a facade that encapsulates feature state and actions. */
@Injectable({ providedIn: 'root' })
export class CounterFacade {
	private readonly _count = signal(0);

	readonly count = this._count.asReadonly();

	increment(): void {
		this._count.update((count) => count + 1);
	}

	decrement(): void {
		this._count.update((count) => count - 1);
	}

	reset(): void {
		this._count.set(0);
	}
}
