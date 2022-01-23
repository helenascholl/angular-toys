import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toy } from '../toy';
import { BackendService } from '../backend.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: [ './buy.component.scss' ]
})
export class BuyComponent implements OnInit {

  public toy: Toy | null = null;
  public name: FormControl;
  public zip: FormControl;
  public group: FormGroup;

  constructor(private readonly route: ActivatedRoute,
              private readonly backendService: BackendService,
              private readonly router: Router) {
    this.name = new FormControl('', [ Validators.required ]);
    this.zip = new FormControl('', [ Validators.required, Validators.min(1000), Validators.max(9999) ]);
    this.group = new FormGroup({ 'name': this.name, 'zip': this.zip });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.backendService.findById(id).subscribe(toy => {
      this.toy = toy;
    }, () => {
      this.back();
    });
  }

  public back(): void {
    this.router.navigate([ '' ]);
  }

  public pay(): void {
    if (this.toy) {
      this.backendService.buy(this.toy.id).subscribe(toy => {
        this.back();
      });
    }
  }

}
