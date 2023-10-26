import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export class AppComponent {
    cartCount = 0;
  
    // Função para incrementar o número do carrinho
    addToCart() {
      this.cartCount++;
    }
  }