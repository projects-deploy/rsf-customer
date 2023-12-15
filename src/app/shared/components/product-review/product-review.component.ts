import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductWhriteReviewComponent } from '../product-whrite-review/product-whrite-review.component';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ProductWhriteReviewComponent, {
      width: '500px',
    })
  }
}
