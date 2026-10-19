export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: Date;

  constructor(data: Partial<User> = {}) {
    this.id = data.id ?? '';
    this.firstName = data.firstName ?? '';
    this.lastName = data.lastName ?? '';
    this.email = data.email ?? '';
    this.role = data.role ?? 'user';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}
