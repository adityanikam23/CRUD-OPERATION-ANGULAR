import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  formdata: any;

  id: any;

  forresult: any;

  constructor(private main : MainService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.main.get("https://dummyjson.com/users/" + this.id).subscribe((myresult: any) => {
     console.log(myresult);
     this.formdata.patchValue({
      firstname : myresult.firstName,
      lastname : myresult.lastName,
      middlename : myresult.maidenName,
      age : myresult.age,
      gender : myresult.gender,
      email : myresult.email,
      phoneno : myresult.phone,
      username : myresult.username,
      password : myresult.password,
      date : myresult.birthDate,
      // image : myresult.image,
      address : myresult.address.address
    });

    })
  }

  ngOnInit(): void {
    this.load();
   
    // console.log(this.id);
    // alert(this.id)



  }


  load() {
    this.formdata = new FormGroup({
      firstname: new FormControl("", Validators.compose([Validators.required])),
      lastname: new FormControl("", Validators.compose([Validators.required])),
      middlename: new FormControl("", Validators.compose([Validators.required])),
      age: new FormControl("", Validators.compose([Validators.required])),
      gender: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      phoneno: new FormControl("", Validators.compose([Validators.required])),
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required])),
      date: new FormControl("", Validators.compose([Validators.required])),
      image: new FormControl("", Validators.compose([Validators.required])),
      address: new FormControl("", Validators.compose([Validators.required]))


    })
  }


  save(data: any) {
   this.main.get("https://dummyjson.com/users" + data).subscribe((result : any)=> {
     console.log(result);
     
   })

  }

}
