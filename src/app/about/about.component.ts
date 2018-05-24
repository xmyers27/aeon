import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

constructor(public http: HttpClient) { }

  ngOnInit() {
   this.http.get('http://localhost:3000/myPages')
    .subscribe( (response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);

    });
  }
}

