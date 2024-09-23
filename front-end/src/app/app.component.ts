import { Component } from '@angular/core';
import { StudentcrudComponent } from './studentcrud/studentcrud.component'; 
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Se o AppComponent também for standalone (caso contrário, remova isso)
  imports: [StudentcrudComponent]  // Importe o componente standalone aqui
})


export class AppComponent {

  StudentArray: any[] = [];
  currentStudentID = "";

  name: string = "";
  address: string = "";
  phone: string = "";

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:8000/user/getAll")
      .subscribe((resultData: any) => {

        console.log(resultData);
        this.StudentArray = resultData.data;
      });


  }

  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;

    this.currentStudentID = data._id;

  }

  UpdateRecords() {
    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,

    };

    this.http.patch("http://localhost:8000/user/update" + "/" + this.currentStudentID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Updateddd")
      this.getAllStudent();

    });
  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete" + "/" + data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Deletedddd")
      this.getAllStudent();

    });
  }

  save() {
    if (this.currentStudentID == '') {
      this.register();
    }
    else {
      this.UpdateRecords();
    }

  }

  register() {

    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
    };
    this.http.post("http://localhost:8000/user/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Successfully")
      //this.getAllEmployee();
      this.name = '';
      this.address = '';
      this.phone = '';
      this.getAllStudent();
    });
  }
  // Lógica do AppComponent
}






