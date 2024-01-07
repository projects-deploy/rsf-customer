import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataRxjsService } from '../rxjs/data-rxjs.service';

@Injectable({
  providedIn: 'root'
})
export class SizeWindowService {

  private windowSizeSubject = new BehaviorSubject<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  windowSize$ = this.windowSizeSubject.asObservable();
  private isAlertShown = false;

  constructor(
    private rxjs: DataRxjsService
  ) {
    this.handleResize();
    this.setupResizeListener();
  }

  private handleResize(): void {
    const windowSize = { width: window.innerWidth, height: window.innerHeight };
    this.windowSizeSubject.next(windowSize);

    // Adicione a lógica de teste aqui
    if (windowSize.width > 991 && !this.isAlertShown) {
      this.rxjs.closeFilterModal(false);
      this.rxjs.crtlOpenCloseMenuCard(false);
      this.isAlertShown = true;
    } else if (windowSize.width <= 991 && this.isAlertShown) {
      this.isAlertShown = false;
    }
  }

  private setupResizeListener(): void {
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  getWindowSize(): { width: number; height: number } {
    return this.windowSizeSubject.value;
  }
}
