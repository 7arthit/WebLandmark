import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  landmarks: any = [];
  Date: any;
  display_img: any;
  cities: any[];
  showname: any = []
  id: any;

  constructor(private http: HttpClient, private route: Router) {
    this.cities = [
      { name: 'ญี่ปุ่น', code: 'NY' },
      { name: 'ประเทศไทย', code: 'RM' },
      { name: 'เนเธอร์แลนด์', code: 'LDN' },
    ];
  }

  ngOnInit(): void {
    timer(0, 100).subscribe(() => {
      this.Date = new Date();
    })
    this.http.get('http://localhost:81/landmark2/land').subscribe((data: any) => {
      console.log(data);
      this.landmarks = data;
    });
  }

  golandmark(id: any) {
    this.display_img = true
    console.log(id);
    this.http.get('http://localhost:81/landmark2/lands/' + id).subscribe((data: any) => {
      console.log(data);
      this.showname = data;
    });
  }

  ok() {
    this.display_img = false;

  }
  no() {
    this.display_img = false;
  }
}
