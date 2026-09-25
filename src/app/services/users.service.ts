import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; // Si no lo renombraste, pon '../models/user'

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    // 1. Simulación de los datos en memoria
    private users: User[] = [
        { id: 1, name: 'Ana', email: 'ana@test.com', active: true },
        { id: 2, name: 'Luis', email: 'luis@test.com', active: false },
        { id: 3, name: 'Carlos', email: 'carlos@test.com', active: true }
    ];

    // 2. Simula una petición HTTP asíncrona con retardo de 500 ms
    async getUsers(): Promise<User[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.users), 500);
        });
    }

    // 3. Filtra y devuelve únicamente los usuarios cuyo active sea true
    async getActiveUsers(): Promise<User[]> {
        const users = await this.getUsers();
        return users.filter(u => u.active);
    }

    // 4. Busca un usuario concreto por su ID
    async getUserById(id: number): Promise<User | undefined> {
        const users = await this.getUsers();
        return users.find(u => u.id === id);
    }
}
