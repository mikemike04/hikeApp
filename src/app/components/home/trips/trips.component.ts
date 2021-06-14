import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddElementComponent } from '../add-element/add-element.component';

export interface Hike {

  name: string;
  start: string;
  end: string;
  length: number;       //in km
  elevation: number;    //im meters
  date: Date;
}

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;

  displayedColumns: string[] = ["name", "start", "end", "length", "elevation", "date", "actions"];
  hikesList: Hike[] = [

    { name: "Brasov-Valea Cetatii", start: "Valea Cetatii", end: "Cabana Postavaru", length: 10.6, elevation: 1050, date: new Date(2020, 4, 1) },
    { name: "Drumul Serpentinelor", start: "Sub Tampa", end: "Varful Tampa", length: 5.6, elevation: 330, date: new Date(2021, 2, 12) },
    { name: "Canionul 7 scari", start: "Dambu Morii", end: "Langa Sacele", length: 6.4, elevation: 372, date: new Date(2021, 8, 31) },
    { name: "Codlea-Cetatea Neagra", start: "Codlea", end: "Cetatea Neagra", length: 4.7, elevation: 425, date: new Date(2018, 11, 11) },
    { name: "Drumul Vechi", start: "Pietrele lui Solomon", end: "Poiana Brasov", length: 4.2, elevation: 328, date: new Date(2019, 6, 12) },
    { name: "Magura-Prapastiile Zarnestilor", start: "Magura", end: "Prapastiile Zarnestilor", length: 13.8, elevation: 821, date: new Date(2018, 5, 3) },

  ]

  trailSearchValue: any;
  dataSource = new MatTableDataSource(this.hikesList);
  hikeForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onRowClick(row: any): void {
    console.log(row);
  }

  onDelete(row: any) {
    const index = this.hikesList.indexOf(row);

    if (index > -1) {
      this.hikesList.splice(index, 1);
      this.dataSource.data = this.hikesList;
    }
  }

  searchTrail(): void {
    this.dataSource.data = this.hikesList.filter(e => e.name.toLowerCase().includes(this.trailSearchValue.toLowerCase()))
  }

  clearSearch(): void {
    this.trailSearchValue = '';
    this.dataSource.data = this.hikesList;
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddElementComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      if (result) {
        this.hikesList.push(result.value);
        this.dataSource.data = this.hikesList;
      }

    });
  }
}
