import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Domaine } from 'app/Acces/data/domaine';
import { DomaineService } from 'app/Acces/services/domaine.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';


/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-ajouter-domaine',
  templateUrl: './ajouter-domaine.component.html',
  styleUrls: ['./ajouter-domaine.component.scss']
})
export class AjouterDomaineComponent implements OnInit {


  
  myform: FormGroup;
 libelleFormControl  = new FormControl('', [
    Validators.required,
  
  ]);
  matcher = new MyErrorStateMatcher();
  constructor(private formBilder:FormBuilder,private route:ActivatedRoute,private domaineService:DomaineService,private JwtClientService:JwtClientService) { 
    this.myform = new FormGroup({
    
    libelleFormControl: this.libelleFormControl
    });
  }
  domaine:Domaine = new Domaine();

  onSubmit() {
    let token = localStorage.getItem("token");
    this.domaineService.createDomaine(token,this.domaine).subscribe(
    data=>{
      console.log(data);
      window.location.reload();
    }
    ,
    error=>{
      console.log(error);
     
    });
  
  }


  ngOnInit(): void {
  }

}



