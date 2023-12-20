import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  url = environment.BASE_URL;
  flag = 'department';

  constructor(
    private http: HttpClient
  ) { }

  getAllDepartments() {
    return this.http.get<Department[]>((`${this.url}/${this.flag}`));
  }

  departmentById(department_id: number) {    return this.http.get<Department>(`${this.url}/${this.flag}/${department_id}`);
  }

  createDepartment(department: Department) {
    return this.http.post<Department>(`${this.url}/${this.flag}`, department);
  }

  updateDepartment(id_department: number, department: Department) {
    return this.http.put<Department>(`${this.url}/${this.flag}/${id_department}`, department);
  }

  removeDepartment(id_department: number) {
    return this.http.delete<Department>(`${this.url}/${this.flag}/${id_department}`);
  }
}
