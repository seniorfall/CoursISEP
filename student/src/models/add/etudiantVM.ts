import { FormBuilder,Validators } from '@angular/forms';

export class EtudiantVM{

    private fe:FormBuilder=new FormBuilder()

    constructor() {
    }

    Etudiant=this.fe.group({
        code:['',Validators.required],
        nom:['',Validators.required],
        prenom:['',Validators.required],
        sexe:[''],
        dateNaissance:['']
    })

}