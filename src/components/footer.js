import React from "react"
import govLogo from "../images/government-ae-logo.png"
import myLogo from "../images/logo-mygov.svg"
import CheckCicle from "../svgs/checkCircle.inline.svg"
import Poll from "../svgs/poll.inline.svg"
import Phone from "../svgs/phone.inline.svg"
import Star from "../svgs/star.inline.svg"

export default function Footer() {
  return (
    <footer className="bg-gold-500">
      <div className="bg-gold-600">
        <div className="lg:container lg:px-4">
          <div className="lg:flex lg:justify-between">
            <div className="py-3 px-4">
              <div className="flex items-center justify-between -mx-4">
                <div className="text-sm px-4">Comments</div>
                <div className="px-4">
                  <span className="inline-block bg-gold-900 text-white uppercase px-3 py-2 text-sm">
                    View All
                  </span>
                </div>
              </div>
            </div>
            <div className="py-3 border-t border-gold-800 px-4">
              <div className="flex items-center justify-between -mx-4">
                <div className="px-4 text-sm">
                  Rate the content of this page
                </div>
                <div className="px-4 flex py-2">
                  <Star />
                  <Star className="ml-1" />
                  <Star className="ml-1" />
                  <Star className="ml-1" />
                  <Star className="ml-1" />
                </div>
              </div>
            </div>
            <div className="py-3 border-t border-gold-800 px-4">
              <div className="flex items-center justify-between -mx-4">
                <div className="text-sm px-4">
                  Did you find this content helpful?
                </div>
                <div className="flex px-4">
                  <span className="inline-block bg-gold-900 text-white uppercase px-3 py-2 text-sm">
                    Yes
                  </span>
                  <span className="inline-block bg-gold-900 text-white uppercase px-3 py-2 text-sm ml-3">
                    No
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-gold-800 lg:py-3">
        <div className="lg:container px-4">
          <div className="lg:flex lg:items-center lg:-mx-4 lg:flex-1">
            <div className="sm:flex sm:flex-wrap sm:-mx-4 lg:flex-no-wrap lg:mx-0 lg:items-center">
              <div className="flex items-center sm:w-1/3 sm:px-4">
                <CheckCicle className="fill-current text-gold-900 w-6 flex-shrink-0" />
                <span className="text-sm uppercase font-semibold ml-2">
                  Client Satisfaction Survey
                </span>
              </div>
              <div className="flex items-center mt-4 sm:w-1/3 sm:mt-0 sm:px-4">
                <Poll className="fill-current text-gold-900 w-6 flex-shrink-0" />
                <span className="text-sm uppercase font-semibold ml-2">
                  Online Poll
                </span>
              </div>
              <div className="flex items-center mt-4 sm:w-1/3 sm:mt-0 sm:px-4">
                <Phone className="fill-current text-gold-900 w-6 flex-shrink-0" />
                <span className="text-sm uppercase font-semibold ml-2">
                  Call Us: 800552255
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-6 sm:-mx-4 sm:justify-start lg:mt-0 lg:mx-0">
              <span className="inline-block sm:w-1/3 sm:px-4 lg:w-auto">
                <img className="h-12 w-auto" src={govLogo} alt="" />
              </span>
              <span className="inline-block sm:w-1/3 sm:px-4 lg:w-auto">
                <img className="h-12 w-auto" src={myLogo} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-gold-800">
        <div className="lg:container px-4">
          <div className="sm:flex sm:-mx-4 lg:justify-between">
            <div className="sm:flex-1 sm:px-4 lg:max-w-md xl:max-w-lg">
              <div className="flex -mx-4">
                <ul className="flex-1 list-reset px-4">
                  <li className="leading-tight">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Sitemap+
                    </span>
                  </li>
                  <li className="leading-tight mt-1">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Archive
                    </span>
                  </li>
                  <li className="leading-tight mt-1">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Careers
                    </span>
                  </li>
                  <li className="leading-tight mt-1">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Terms & Conditions
                    </span>
                  </li>
                </ul>
                <ul className="flex-1 list-reset px-4">
                  <li className="leading-tight">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Privacy Policy
                    </span>
                  </li>
                  <li className="leading-tight mt-1">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Disclaimer
                    </span>
                  </li>
                  <li className="leading-tight mt-1">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Accessibility
                    </span>
                  </li>
                  <li className="leading-tight mt-1">
                    <span className="inline-block text-xs uppercase text-gold-900">
                      Copyright Policy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:flex-1 sm:px-4 mt-4 sm:mt-0 lg:max-w-sm">
              <h4 className="font-medium uppercase">
                Subscribe To Our Newsletter
              </h4>
              <form className="flex mt-2">
                <input
                  className="py-2 px-3 w-full appearance-none bg-white leading-tight text-gray-900 text-sm focus:outline-none"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  className="px-3 py-2 bg-gold-900 text-white uppercase text-sm tracking-widest"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container px-4">
          <div className="sm:flex sm:justify-between sm:-mx-4">
            <p className="text-white text-xs sm:flex-1 sm:px-4">
              This site is best viewed in 1366x768 screen resolution. Supports:
              Microsoft Internet Explorer 11.0+, Firefox 10.0+, Safari 1.2+,
              Google Chrome 12.0.
            </p>
            <p className="text-white text-xs mt-4 sm:mt-0 sm:px-4">
              Page last updated on: 06/19/2019 06:48:28.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
