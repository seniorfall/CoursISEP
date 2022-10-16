import { FormControl,Validators,FormArray,FormGroup } from '@angular/forms';

export class Note{

    date= new FormControl('');

    note = new FormControl('',Validators.required);

    commentaire=new FormControl();
    
    observations=new FormArray([
        new FormControl('')
    ])

}