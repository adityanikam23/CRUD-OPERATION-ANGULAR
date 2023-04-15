import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  mydata: any;

  myid: any;

  constructor(private main: MainService, private route: ActivatedRoute) {



  }

  ngOnInit(): void {
    this.data();

  }

  data() {
    this.main.get("https://dummyjson.com/users").subscribe((result: any) => {
      this.mydata = result.users;
    })

  }


  delete(id: any) {
    if (confirm("Sure To Delete")) {
      this.main.delete("https://dummyjson.com/users/" + id).subscribe((result: any) => {
        this.data();
      });
    }
  }

}
