import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  name: any;
  datareviwe: any = []
  data: any;
  id: any;
  comments: any = []
  massage: any

  constructor(private http: HttpClient, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activatedroute.snapshot.params['name']
    this.http.get('http://localhost:81/landmark1/landname/' + this.name).subscribe((data: any) => {
      console.log(data);
      this.datareviwe = data;
      this.id = data[0].land_id;
      this.http.get('http://localhost:81/landmark1/comment/' + this.id).subscribe((data: any) => {
        console.log(data);
        this.comments = data;
      });
    });


  }
  
  send() {
    let massages = {
      massage: this.massage,
      land_id: this.id
    }
    let oj_massages = JSON.stringify(massages);

    this.http.post('http://localhost:81/landmark1/comments', oj_massages).subscribe(() => {
      this.repage();
    });

  }

  repage() {
    this.massage = " "
    this.http.get('http://localhost:81/landmark1/comment/' + this.id).subscribe((data: any) => {
      this.comments = data;
    });
  }
}
