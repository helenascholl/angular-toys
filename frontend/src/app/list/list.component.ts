import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Toy } from '../toy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {

  public toys: Toy[] = [];

  constructor(private readonly backendService: BackendService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.backendService.findAll().subscribe(toys => {
      this.toys = toys;
    });
  }

  public buy(id: number): void {
    this.router.navigate([ `buy/${id}` ]);
  }

}
