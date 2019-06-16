import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../svgs/logo.svg"
import BurgerIcon from "../svgs/burger.inline.svg"
import ModeIcon from "../svgs/mode.inline.svg"
import HomeIcon from "../svgs/home.inline.svg"
import EmailIcon from "../svgs/email.inline.svg"
import SearchIcon from "../svgs/search.inline.svg"
import PrinterIcon from "../svgs/printer.inline.svg"
import VolumnIcon from "../svgs/volumn.inline.svg"
import FontUpIcon from "../svgs/fontUp.inline.svg"
import FontDownIcon from "../svgs/fontDown.inline.svg"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header className="antialiased">
    <nav className="px-4 shadow py-4 lg:flex lg:justify-between lg:py-0 lg:px-10">
      <div className="flex items-center justify-between lg:py-3">
        <img className="h-16 w-auto" src={logo} alt="" />
        <ul className="list-reset flex items-center -mx-2 lg:hidden">
          <li className="px-2 leading-none">
            <span className="uppercase text-xs">عربي</span>
          </li>
          <li className="px-2 leading-none">
            <span className="uppercase text-xs">Sign In</span>
          </li>
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-between lg:mt-0">
        <div>
          <div className="flex items-center -mx-2 lg:justify-end">
            <ul className="flex items-center list-reset">
              <li className="px-2 leading-none">
                <span className="inline-block">
                  <HomeIcon className="h-4 w-5 lg:h-3 lg:w-auto" />
                </span>
              </li>
              <li className="px-2 leading-none">
                <span className="inline-block">
                  <PrinterIcon className="h-4 w-5 lg:h-3 lg:w-auto" />
                </span>
              </li>
              <li className="px-2 leading-none">
                <span className="inline-block">
                  <EmailIcon className="h-4 w-5 lg:h-3 lg:w-auto" />
                </span>
              </li>
              <li className="px-2 leading-none">
                <span className="inline-block">
                  <ModeIcon className="h-4 w-5 lg:h-3 lg:w-auto" />
                </span>
              </li>
              <li className="px-2 leading-none">
                <span className="inline-block">
                  <VolumnIcon className="h-4 w-5 lg:h-3 lg:w-auto" />
                </span>
              </li>
              <li className="px-2 leading-none">
                <span className="inline-block">
                  <FontUpIcon className="h-4 w-5 lg:h-3 lg:w-auto" />
                </span>
              </li>
              <li className="px-2 leading-none">
                <span className="inline-block">
                  <FontDownIcon className="h-4 w-5 lg:h-3 lg:w-auto" />
                </span>
              </li>
            </ul>
            <ul className="hidden lg:flex items-center list-reset">
              <li className="px-2 leading-none">
                <span className="uppercase text-xs">عربي</span>
              </li>
              <li className="px-2 leading-none">
                <span className="uppercase text-xs">Sign In</span>
              </li>
            </ul>
          </div>
          <ul className="hidden lg:flex items-center list-reset -mx-2 xl:-mx-4 mt-3">
            <li className="px-2 xl:px-4 leading-none">
              <span className="text-xs xl:text-sm uppercase font-semibold inline-block">
                About
              </span>
            </li>
            <li className="px-2 xl:px-4 leading-none">
              <span className="text-xs xl:text-sm uppercase font-semibold inline-block">
                Services
              </span>
            </li>
            <li className="px-2 xl:px-4 leading-none">
              <span className="text-xs xl:text-sm uppercase font-semibold inline-block">
                Initiatives
              </span>
            </li>
            <li className="px-2 xl:px-4 leading-none">
              <span className="text-xs xl:text-sm uppercase font-semibold inline-block">
                Media
              </span>
            </li>
            <li className="px-2 xl:px-4 leading-none">
              <span className="text-xs xl:text-sm uppercase font-semibold inline-block">
                Open Data
              </span>
            </li>
            <li className="px-2 xl:px-4 leading-none">
              <span className="text-xs xl:text-sm uppercase font-semibold inline-block">
                E-Participation
              </span>
            </li>
            <li className="px-2 xl:px-4 leading-none">
              <span className="text-xs xl:text-sm uppercase font-semibold inline-block">
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div className="-mr-2 flex items-center lg:border-l lg:self-center lg:h-full lg:-mr-4 lg:pl-4 lg:ml-8">
          <span className="px-2 lg:px-4">
            <SearchIcon className="h-5 lg:h-6 w-auto" />
          </span>
          <span className="px-2 lg:px-4">
            <BurgerIcon className="h-5 lg:h-6 w-auto" />
          </span>
        </div>
      </div>
    </nav>

    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
