import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <-- 1. Importamos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner
} from '@ionic/angular';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSpinner
  ]
})
export class UsersPage implements OnInit {
  users: User[] = [];
  loading = false;

  // 2. Inyectamos cdr en el constructor
  constructor(
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    try {
      this.loading = true;
      this.cdr.detectChanges(); // Forzamos mostrar el spinner
      this.users = await this.usersService.getActiveUsers();
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    } finally {
      this.loading = false;
      this.cdr.detectChanges(); // <-- 3. Forzamos actualizar la vista para ocultar spinner y mostrar la lista
    }
  }
}
