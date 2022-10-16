import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  sigle:string

  constructor(private router:ActivatedRoute,private route:Router) {
    this.sigle=''
   }

  ngOnInit(): void {
    this.sigle=this.router.snapshot.params['sigle']
    //this.route.navigate(['/home'])
  }

}
