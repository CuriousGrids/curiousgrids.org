import React from 'react'
import patreon from "./img/patreon.png";
import btc from "./img/btc.png";
import eth from "./img/eth.png";
import doge from "./img/doge.png";

export default function Support() {
    return (
        <div><br/>
          <section className="text-center">
            <p className="text-white text-left items-center inline-block">Your contributions will go towards:<br/>• Making the videos.<br/>• Cover website hosting fees for proxies. <br/>• Paying contributors & community members.</p>
          </section>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                    <img className="w-24 h-24 shadow-xl" src={patreon} alt="Curious Grids patreon"/>   
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-1 text-xl text-red-500">Patreon</h2>
                    <a class="leading-relaxed text-white hover:text-green-600" href="https://www.patreon.com/curiousgrids" target="_blank">https://www.patreon.com/curiousgrids</a>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                    <img className="w-24 h-24 shadow-xl" src={btc} alt="Curious Grids BTC"/>   
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-yellow-600 mb-1 text-xl">Bitcoin address</h2>
                    <p class="leading-relaxed text-white">bc1qepznzpn4tvuzflup5kay59pcsqkeqxzq9a0525</p>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                    <img className="w-24 h-24 shadow-xl" src={eth} alt="Curious Grids ETH"/>   
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-400 mb-1 text-xl">Ethereum address</h2>
                    <p class="leading-relaxed text-white">0xD5536cD5AF37835F5DbA14EE4661800d453C8115</p>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                    <img className="w-24 h-24 shadow-xl" src={doge} alt="Curious Grids DOGE"/>   
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-yellow-400 mb-1 text-xl">Dogecoin address</h2>
                    <p class="leading-relaxed text-white">DDigSGmAYt3BHYCGA6eQf3etToXiobywk8</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-center">
            <p className="text-white text-left items-center inline-block">We love what you do and we just want to say "thank you" for your support.</p><br/>
          </section>
        </div>
    );
}
