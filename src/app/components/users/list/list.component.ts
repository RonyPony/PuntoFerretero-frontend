import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class UserListComponent {
  searchTerm: string = '';
  data: any[] = [
    { nombre: 'Juan', apellido: 'Martinez', created: '10/10/2021', updated: '10/10/2021' },
    { nombre: 'Miguel', apellido: 'jimenez', created: '10/10/2021', updated: '10/10/2021' },
    { nombre: 'Pedro', apellido: 'cruz', created: '10/10/2021', updated: '10/10/2021' },
    { nombre: 'Pepe', apellido: 'amarillo', created: '10/10/2021', updated: '10/10/2021' },
    // Agrega más datos según sea necesario
  ];

  get filteredData() {
    if (this.searchTerm) {
      return this.data.filter(item =>
        item.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.apellido.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.created.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.updated.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      return this.data;
    }
  }
}
