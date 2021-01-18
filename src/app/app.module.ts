import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiPromise, WsProvider } from '@polkadot/api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

async function initApi () {
  const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
  const api = await ApiPromise.create({ provider });

  api.rpc.chain.subscribeNewHeads((header) => {
    console.log(header.number.toHuman());
  });
}

initApi().catch(console.error);
