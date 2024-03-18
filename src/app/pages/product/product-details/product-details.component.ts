import { Component, ElementRef, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/Cart';
import { Customer } from 'src/app/models/Customer';
import { prodReview } from 'src/app/models/Generics';
import { NotifyArrival } from 'src/app/models/NotifyArrival';
import { Product } from 'src/app/models/Product';
import { Questions, QuestionsRequest } from 'src/app/models/Questions';
import { CartService } from 'src/app/services/cart/cart.service';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { NotifyArrivalService } from 'src/app/services/notify-arrival/notify-arrival.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { DefaultModalComponent } from 'src/app/shared/components/default-modal/default-modal.component';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  cart: any = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || null;
  customer: Customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`) || null;
  customer_id: number = 1;
  qtItems: number = 1;

  oppened_modal: boolean = false;
  oppened_modal_arrive: boolean = false;

  product_id: string = '';
  product: Product = {
    name: '',
    detail: '',
    link_photo: '',
    price_product: 0,
    price_promo: 0,
    in_stok: 0,
    delivery: 0,
    discount: 0,
    category_idd: 0,
    department_idd: 0,
    product_size: '',
    product_colors: '',
    brand: {
      name: '',
      link_photo: ''
    },
    reviews: [],
    average_rating: 0,
    review_count: 0,
    category: {
      id: 0,
      name: '',
    },
    department: {
      id: 0,
      name: '',
    }
  };

  sizes: ProductsSizes[] = [];
  colors: ProductsColors[] = [];

  questionForm!: FormGroup;
  arrivalForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private dialog: MatDialog,
    private rxjs: DataRxjsService,
    private cartService: CartService,
    private acvtRouter: ActivatedRoute,
    private prodService: ProductsService,
    private favoritesService: FavoritesService,
    private questionsService: QuestionsService,
    private notifyArrivalService: NotifyArrivalService,
  ) { }

  ngOnInit(): void {
    this.product_id = this.acvtRouter.snapshot.params['product_id'];
    this.productById(+this.product_id);
    this.initForm();
  }

  initForm() {
    this.questionForm = this.fb.group({
      product_id: [+this.product_id],
      customer_id: [this.customer.id],
      content: ['', Validators.required]
    });

    this.arrivalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      product_id: [+this.product_id],
    });
  }

  chackCartProduct(item: Product) {
    if (this.cart !== null) {
      this.cart.forEach((cart: any) => {
        if (cart.product.id === item.id) {
          this.qtItems = cart.qtde_item
        }
      });
    }
  }

  productById(product_id: number) {
    this.prodService.productById(product_id).subscribe({
      next: (data) => {
        let sizes: any = data.product_size;
        let colors: any = data.product_colors;
        this.product = data;
        this.product.price_promo = data.price_product - ((data.price_product * data.discount) / 100);
        this.createArrColorsAndSizes(data.product_size, data.product_colors);
        this.chackCartProduct(data);

         let data_reviews: prodReview = {
          average_rating: data.average_rating,
          review_count: data.review_count
        };

        this.rxjs.sendRating(data_reviews);

        // console.log('LIST PRODUCTS ID DATA', data);
      },
      error: (err) => {
        console.log('LIST PRODUCTS ID ERR', err);
      }
    });
  }

  openModal() {
    this.dialog.open(DefaultModalComponent, {
      width: '500px',
    }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addToCart(item: any) {

    let products: CartItem = {
      product: item,
      qtde_item: this.qtItems,
      amount: item.price_promo * this.qtItems
    }
    this.cartService.addItem(products);
  }

  selectColor(idx: number) {
    this.colors.forEach((c: any, i: number) => {
      c.selected = idx === i ? true : false
    });
  }

  selectSize(idx: number) {
    this.sizes.forEach((c: any, i: number) => {
      c.selected = idx === i ? true : false
    });
  }

  createArrColorsAndSizes(size: string, colors: string) {

    colors.split(',').forEach((color: any, idx: number) => {
      this.colors.push({
        color: color,
        selected: idx == 0 ? true : false
      })
    });

    size.split(',').forEach((item: any, idx: number) => {
      this.sizes.push({
        name: item,
        selected: idx == 0 ? true : false,
        disabled: false
      })
    });
  }

  addToFavorites(product: any) {
    //ajustar customer_id
    this.favoritesService.createFavorites(+this.customer_id, +product.id).subscribe({
      next: (data) => {
        console.log('PRODUTO FAVOTIRADO', data);
      },
      error: (err) => {
        console.log('ERRO AO FAVORITAR O PRODUTO', err);
      }
    });
  }

  sendArrival(form: NotifyArrival) {
    this.notifyArrivalService.createNotifyArrival(form).subscribe({
      next: (data) => {
        console.log('NOTIFICAÇÃO DE LEMBRETE E PRODUTO', data);
        this.oppened_modal_arrive = false;
        this.arrivalForm.patchValue({
          name: '',
          email: '',
          product_id: ''
        })
      },
      error: (err) => {
        console.log('NOTIFICAÇÃO DE LEMBRETE E PRODUTO ERRO', err);
      }
    });
  }

  sendQuestion(form: QuestionsRequest) {
    this.questionsService.createQuestions(form).subscribe({
      next: (data) => {
        console.log('QUESTION CREATE', data);
        this.oppened_modal = false;
        this.rxjs.questionsReload(true);
      },
      error: (err) => {
        console.log('QUESTION CREATE err', err);
      }
    });
  }

  addItems() {
    this.qtItems++;
  }

  rmvItems() {
    this.qtItems--;
  }

  get l() {
    return this.arrivalForm.controls;
  }

}

interface ProductsColors {
  color: string,
  selected: boolean
}

interface ProductsSizes {
  name: string,
  selected: boolean,
  disabled: boolean
}