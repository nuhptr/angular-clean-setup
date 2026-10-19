import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

const isAuthenticated = (): boolean =>
	typeof localStorage !== 'undefined' && Boolean(localStorage.getItem('authToken'));

export const authGuard: CanActivateFn = () => {
	const router = inject(Router);
	return isAuthenticated() || router.createUrlTree(['/login']);
};

export const guestGuard: CanActivateFn = () => {
	const router = inject(Router);
	return !isAuthenticated() || router.createUrlTree(['/dashboard']);
};
