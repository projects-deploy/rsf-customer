import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { DefaultModalComponent } from 'src/app/shared/components/default-modal/default-modal.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {

  oppened_modal: boolean = false;

  product_id: string = '';
  product!: Product;

  sizes: ProductsSizes[] = [];
  colors: ProductsColors[] = [];

  constructor(
    private el: ElementRef,
    public dialog: MatDialog,
    private cartService: CartService,
    private acvtRouter: ActivatedRoute,
    private prodService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.product_id = this.acvtRouter.snapshot.params['product_id'];
    this.productById(+this.product_id);
  }

  productById(product_id: number) {
    this.prodService.productById(product_id).subscribe({
      next: (data) => {
        let sizes: any = data.product_size;
        let colors: any = data.product_colors;
        this.product = data;
        this.product.price_promo = data.price_product - ((data.price_product * data.discount) / 100);
        console.log('LIST PRODUCTS ID DATA', this.product);
        this.createArrColorsAndSizes(data.product_size, data.product_colors)
      },
      error: (err) => {
        console.log('LIST PRODUCTS ID ERR', err);
      }
    });
  }

  ngAfterViewInit(): void { }

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
      qtde_item: 1,
      amount: 0
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