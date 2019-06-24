import React from "react"
import RightCarretIcon from "../../svgs/rightCarret.inline.svg"

export default function Search() {
  return (
    <div className="relative lg:ml-24">
      <div className="flex items-center border-b border-gray-900">
        <input
          className="appearance-none w-full py-2 text-gray-900 leading-tight text-sm focus:outline-none"
          type="search"
          placeholder="What are you looking for?"
        />
        <span className="hidden ml-2 uppercase font-semibold text-sm flex-shrink-0 sm:inline-block">
          Advanced Search
        </span>
      </div>
      <div className="absolute bg-white inset-auto inset-x-0 mt-4">
        <ul className="list-reset">
          <li>
            <span className="text-sm font-medium">
              Registration of borrowed cultural objects
            </span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">Library membership</span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">
              Rental of theatres, halls and areas of the Ministry
            </span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">
              Request for consulting visit to library
            </span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">
              Issuing International Standard Book Number (ISBN)
            </span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">Borrowing library items</span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">Services</span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">Home</span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">Search</span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">Open Data</span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">E-Participation</span>
          </li>
          <li className="mt-2">
            <span className="text-sm font-medium">Contact</span>
          </li>
        </ul>
        <span className="inline-flex items-center py-3 px-5 mt-6 font-semibold uppercase text-sm border border-black">
          <RightCarretIcon className="h-4" />
          <span className="ml-2">See All Results (4983)</span>
        </span>
      </div>
    </div>
  )
}
