import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../../services/auth.service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(
    private authService: AuthServiceService
  ) {

  }
  ngOnInit(): void {
    this.getData();
  }
  searchTerm: string = '';
  data: any[] = [
    // Agrega más datos según sea necesario
  ];

  getData() {
    this.authService.getUsers().subscribe((x) => {
      console.log(x)
      this.data = x
    })
  }

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
