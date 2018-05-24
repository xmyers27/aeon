import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact = {
    name: '',
    email: '',
    phonenumber: '',
  }

  constructor(public http: HttpClient) { }


  ngOnInit() {
  }


  submit(){
    this.http.post('http://localhost:8080/sendEmail', this.contact)
    .subscribe( (response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

  }

}
