import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatListModule,
      CommonModule,
      LayoutModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  @ViewChild(MatSidenav, {static: true})
  sidenav!: MatSidenav;
  
  title = 'optimus';


  constructor(private observer: BreakpointObserver,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.observer.observe(["(max-width:800px)"])
    .subscribe((res) => {
      if(res.matches){
        this.sidenav.mode ="over";
        this.sidenav.close();

      } else{
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    }
    
    );
  }

  ngAfterViewInit() {
    console.log('Sidenav abierto:', this.sidenav?.opened);
  }

  navigate(route: string) {
    this.router.navigate([route]); // 🔹 Navega a la ruta
    if (this.sidenav.mode === 'over') {
      this.sidenav.close(); // 🔹 Cierra el menú si está en modo "over"
    }
  }
 
}
