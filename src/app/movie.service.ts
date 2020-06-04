import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {moviedetails} from './moviedetails'




@Injectable({
  providedIn: 'root'
})
export class MovieService {
  searchInput;
  creaturl;


  constructor(private http : HttpClient) { }

  getmoviesearchvalue(searchvalue)
  { 
   this.searchInput = searchvalue;
    this.creaturl =  "http://www.omdbapi.com/?t="+this.searchInput.name+"&y="+this.searchInput.year+"&apikey=a6e121e";
   console.log(this.creaturl);
  }
  getMovie() : Observable<moviedetails>
  {
   var data=this.http.get<moviedetails>(this.creaturl);
   return data;
  }

}
