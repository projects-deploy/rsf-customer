import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Reviews } from 'src/app/models/Reviews';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { ratingStar } from '../../utils/starLoop';
import { Customer } from 'src/app/models/Customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { prodReview } from 'src/app/models/Generics';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {
  
  @Input() product_review: number = 0;

  customer: Customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`);

  reviewForm!: FormGroup;
  data_reviews: prodReview = {
    average_rating: 0,
    review_count: 0
  };
  rating_review = ratingStar;
  value_rating: number = 0;
  oppened_modal: boolean = false;
  reviews: Reviews[] = [];

  rating_of_stars: number = 0;
  number_of_stars: number = 0;

  constructor(
    private fb: FormBuilder,
    private rxjs: DataRxjsService,
    private reviewsService: ReviewsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.reviewsOfProduct();
    
    this.rxjs.dataReview$.subscribe(data => {
      if (data) {
        this.data_reviews = data;
      }
    })
  }

  initForm() {
    this.reviewForm = this.fb.group({
      title: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  reviewsOfProduct() {
    this.reviewsService.reviewsOfProductsId(this.product_review).subscribe({
      next: (data) => {
        this.reviews = data;
        let sum: number = 0;
        data.forEach((item: Reviews) => {
          sum += item.rating;
        });

        this.rating_of_stars = this.data_reviews.average_rating;
        console.log('REVIEWS BY PRODUCT ID DATA', this.rating_of_stars, data);
      },
      error: (err) => {
        console.log('REVIEWS BY PRODUCT ID ERR', err);
      }
    });
  }

  createReviewProduct(form: Reviews) {

    let obj: any = {
      ...form,
      rating: +this.value_rating,
      customer: {
        id: Number(this.customer.id)
      },
      product: {
        id: this.product_review
      }
    }
    console.log('VALUES REVIEW:', obj);

    this.reviewsService.createReviews(obj).subscribe({
      next: (data) => {
        console.log('REVIEWS BY PRODUCT ID DATA', this.reviews);
        this.reviewsOfProduct();
        this.oppened_modal = false;
        this.resetForm();
        alert('SUCESSO');
      },
      error: (err) => {
        console.log('REVIEWS BY PRODUCT ID ERR', err);
      }
    });
  }

  resetForm() {
    this.reviewForm.patchValue({title: '', comment: '' });
    this.value_rating = 0;
  }

  onRatingSet(rating: number): void {
    console.warn(`User set rating to ${rating}`);
    this.number_of_stars = rating;
  }
}
