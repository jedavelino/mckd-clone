import React from "react"
import MinusIcon from "../svgs/minus.inline.svg"

export default function Menu() {
  return (
    <section className="bg-gold-500">
      <div className="px-4 lg:px-10">
        <div className="lg:flex lg:flex-wrap lg:-mx-4">
          <div className="w-full lg:w-1/4 lg:px-4">
            <h3 className="text-2xl font-bold uppercase relative py-5 leading-tight lg:text-xl lg:py-2">
              <span>About</span>
              <span className="absolute right-0 top-0 bottom-0 h-full flex items-center lg:hidden">
                <MinusIcon />
              </span>
            </h3>
            <div className="border-b border-gray-400 lg:border-none">
              <ul className="hidden list-reset pt-3 pb-4 border-t-3 border-gold-800 lg:block lg:border-t lg:border-gray-900 lg:pt-1">
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">About the Ministry</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Vision and Mission</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    MCKD Responsibilities
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">About the Minister</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    Organizational Chart
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Cultural Sectors</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">MCKD Partners</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/4 lg:px-4">
            <h3 className="text-2xl font-bold uppercase relative py-5 leading-tight lg:text-xl lg:py-2">
              <span>Services</span>
              <span className="absolute right-0 top-0 bottom-0 h-full flex items-center lg:hidden">
                <MinusIcon />
              </span>
            </h3>
            <div className="border-b border-gray-400 lg:border-none">
              <ul className="hidden list-reset pt-3 pb-4 border-t-3 border-gold-800 lg:block lg:border-t lg:border-gray-900 lg:pt-1">
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    Literature Services Package
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    Cultural Centers Services Package
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    Tangible Heritage Services Package
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Refund Fees Portal</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/4 lg:px-4">
            <h3 className="text-2xl font-bold uppercase relative py-5 leading-tight lg:text-xl lg:py-2">
              <span>Media</span>
              <span className="absolute right-0 top-0 bottom-0 h-full flex items-center lg:hidden">
                <MinusIcon />
              </span>
            </h3>
            <div className="border-b border-gray-400 lg:border-none">
              <ul className="hidden list-reset pt-3 pb-4 border-t-3 border-gold-800 lg:block lg:border-t lg:border-gray-900 lg:pt-1">
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">News</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Events</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Gallery</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Media Kit</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Smart Application</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/4 lg:px-4">
            <h3 className="text-2xl font-bold uppercase relative py-5 leading-tight lg:text-xl lg:py-2">
              <span>Initiatives</span>
              <span className="absolute right-0 top-0 bottom-0 h-full flex items-center lg:hidden">
                <MinusIcon />
              </span>
            </h3>
            <div className="border-b border-gray-400 lg:border-none">
              <ul className="hidden list-reset pt-3 pb-4 border-t-3 border-gold-800 lg:block lg:border-t lg:border-gray-900 lg:pt-1">
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Al Burda</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    National Register of Artifacts and Archaeological Sites
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">UAE Flag</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    Emirates National Gate of Libraries
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/4 lg:px-4">
            <h3 className="text-2xl font-bold uppercase relative py-5 leading-tight lg:text-xl lg:py-2">
              <span>Open Data</span>
              <span className="absolute right-0 top-0 bottom-0 h-full flex items-center lg:hidden">
                <MinusIcon />
              </span>
            </h3>
            <div className="border-b border-gray-400 lg:border-none">
              <ul className="hidden list-reset pt-3 pb-4 border-t-3 border-gold-800 lg:block lg:border-t lg:border-gray-900 lg:pt-1">
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Open Data Policy</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Downloadables</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/4 lg:px-4">
            <h3 className="text-2xl font-bold uppercase relative py-5 leading-tight lg:text-xl lg:py-2">
              <span>E-Participation</span>
              <span className="absolute right-0 top-0 bottom-0 h-full flex items-center lg:hidden">
                <MinusIcon />
              </span>
            </h3>
            <div className="border-b border-gray-400 lg:border-none">
              <ul className="hidden list-reset pt-3 pb-4 border-t-3 border-gold-800 lg:block lg:border-t lg:border-gray-900 lg:pt-1">
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">
                    E-Participation Policy
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Polls</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">E-Consultation</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/4 lg:px-4">
            <h3 className="text-2xl font-bold uppercase relative py-5 leading-tight lg:text-xl lg:py-2">
              <span>Contact</span>
              <span className="absolute right-0 top-0 bottom-0 h-full flex items-center lg:hidden">
                <MinusIcon />
              </span>
            </h3>
            <div className="border-b border-gray-400 lg:border-none">
              <ul className="hidden list-reset pt-3 pb-4 border-t-3 border-gold-800 lg:block lg:border-t lg:border-gray-900 lg:pt-1">
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Ministry Locations</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Cultural Centers</span>
                </li>
                <li className="mt-1">
                  <span className="text-lg lg:text-sm">Contact Forms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul className="list-reset">
            <li>
              <span className="text-sm text-gray-500">Sitemap+</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">Archive</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">Careers</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">Terms & Conditions</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">Privacy Policy</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">Disclaimer</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">Accessibility</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">Copyright Policy</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
