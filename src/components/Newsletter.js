import React from 'react'

export default function Newsletter() {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                  <div class="-my-8 divide-y-2 divide-gray-100">
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-white">Newsletter</span>
                        <span class="mt-1 text-gray-500 text-sm">Aug 2021</span>
                      </div>
                      <div class="md:flex-grow">
                        <h2 class="text-xl font-medium text-white title-font mb-2">Coming soon..</h2>
                        <p class="leading-relaxed">We will release our first newsletter in August. Stay tuned ;)</p>
                        <a class="text-green-500 inline-flex items-center mt-4 cursor-pointer hover:text-white">Learn More
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>
    )
}
