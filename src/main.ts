import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export function changeScroll(active: boolean){
  if (active){
    const mybody = document.getElementById("app-body") as HTMLBodyElement;
    mybody.style.overflowY = "scroll";
    mybody.ariaHidden = "false";
  }
  else{
    const mybody = document.getElementById("app-body") as HTMLBodyElement;
    mybody.style.overflowY = "hidden";
    mybody.ariaHidden = "true";
  }
}

