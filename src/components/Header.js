import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import "../App.css";
import logo from "./img/logo.png";

export default function Header() {
    return (
        <>
        <header className="header">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
              <img className="w-10 h-10 shadow-xl" src={logo} alt="Curious Grids Logo" />   
              <span className="ml-3 text-xl text-green-400">Curious Grids</span>
            </a>
            <nav className="text-white md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 cursor-pointer hover:text-green-400" href="https://www.youtube.com/channel/UCrGMI1P1PmL0hmKlKeNvKqQ" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 mr-1 text-red-600 hover:text-red-700 inline-block" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg> YouTube</a>
              <Link to="/newsletter"><a className="mr-5 cursor-pointer hover:text-green-400">Newsletters</a></Link> 
            </nav>
            <Link to="/support">
              <button className="inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-white hover:text-pink-600 border-2 border-white hover:border-pink-600">Support‎‎
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
              </button>
            </Link>
          </div>
        </header>
        </>
    );
}
