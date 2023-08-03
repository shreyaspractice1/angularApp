import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  myForm: FormGroup;
  genders = [
    { id: "1", value: "Male" },
    { id: "2", value: "Female" },
  ];
  isFormSubmitted: boolean = false;
  constructor() {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.myForm = new FormGroup({
      userDetails: new FormGroup({
        username: new FormControl("", Validators.required),
        email: new FormControl(null , [Validators.required, Validators.email]),
        
      }),
      course: new FormControl("Angular"),
      gender: new FormControl("Male", Validators.required),
      email: new FormControl(["", Validators.required]),
      skills: new FormArray([new FormControl("Angular8", Validators.required)]),
    
    });
  }

  OnSubmit() {
    if (this.myForm.valid) {
      this.isFormSubmitted = true;
    }
    console.log("Submit method called", this.myForm);
    console.log("Form Values : ", this.myForm.value);
  }
  OnAddSkills() {
    this.myForm.get("skills") as FormArray;
    (<FormArray>this.myForm.get("skills")).push(
      new FormControl("", Validators.required)
    );
  }
  RemoveSkill(i:number){
    (<FormArray>this.myForm.get('skills')).removeAt(i)
  }
}

// ==================================================================