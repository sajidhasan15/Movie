import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { InputComponent } from '../input/input.component';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
receivedMovie;
searchvalue;
clickproduct;
  constructor(private dialog : MatDialog, private movieservice:MovieService ) { }

  ngOnInit() {
  }
  SearchMovie()
  {
    const dialogRef = this.dialog.open(InputComponent, { 
      height: '350px',
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.searchvalue = result.value;
        // console.log( "dialogRef.afterClosed()");
        // console.log( this.searchvalue);
      this.movieservice.getmoviesearchvalue(this.searchvalue);
      this.movieservice.getMovie()
          .subscribe( data => {
            this.receivedMovie = data;
            this.clickproduct = true;
            console.log(this.receivedMovie);
          })
    }})
  }
}
