import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
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
import Menu from "./Header/menu"
import Search from "./Header/search"

export default class Header extends Component {
  state = {
    menuIsOpen: false,
    searchIsOpen: false,
  }
  toggleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
      searchIsOpen: this.state.searchIsOpen
        ? !this.state.searchIsOpen
        : this.state.searchIsOpen,
    })
  }
  toggleSearch = () => {
    this.setState({
      searchIsOpen: !this.state.searchIsOpen,
      menuIsOpen: this.state.menuIsOpen
        ? !this.state.menuIsOpen
        : this.state.menuIsOpen,
    })
  }
  close = e => {
    if (this.state.searchIsOpen || this.state.menuIsOpen) {
      if (e.keyCode === 27) {
        this.setState({
          searchIsOpen: false,
          menuIsOpen: false,
        })
      }
    }
  }
  render() {
    return (
      <header
        className={
          this.state.menuIsOpen || this.state.searchIsOpen
            ? "antialiased bg-white focus:outline-none shadow z-50 fixed inset-x-0 top-0 flex flex-col h-full overflow-y-auto"
            : "antialiased bg-white focus:outline-none shadow z-50 fixed inset-x-0 top-0 flex flex-col"
        }
        onKeyDown={this.close}
        tabIndex="0"
      >
        <nav className="px-4 py-4 bg-white lg:flex lg:justify-between lg:py-0 lg:px-10">
          <div className="flex items-center justify-between lg:py-5">
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
          <div className="mt-4 flex items-center justify-between flex-1 lg:mt-0">
            <div className="flex-1">
              <div
                className={
                  this.state.searchIsOpen
                    ? "hidden"
                    : "flex items-center -mx-2 lg:justify-end"
                }
              >
                <ul className="flex items-center list-reset py-2">
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
              <ul
                className={
                  this.state.searchIsOpen
                    ? "hidden"
                    : "mt-1 hidden list-reset -mx-2 xl:-mx-4 lg:flex lg:items-center lg:justify-end"
                }
              >
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
              {this.state.searchIsOpen && <Search />}
            </div>
            <div className="-mr-2 flex items-center md:ml-8 lg:border-l lg:self-center lg:h-full lg:-mr-4 lg:pl-4">
              <span onClick={this.toggleSearch} className="px-2 lg:px-4">
                <SearchIcon className="h-5 lg:h-6 w-auto" />
              </span>
              <span onClick={this.toggleMenu} className="px-2 lg:px-4">
                <BurgerIcon className="h-5 lg:h-6 w-auto" />
              </span>
            </div>
          </div>
        </nav>
        {this.state.menuIsOpen && <Menu />}
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
