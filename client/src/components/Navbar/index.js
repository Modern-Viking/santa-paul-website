import React, {useState} from "react";
import DeckTheHalls from "../deckTheHalls";






const Navbar = () => {

        return (
            <nav className="navbar is-transparent">
  <div className="navbar">
    <a className="navbar-item" href="/">
      <i className="fas fa-sleigh 3x"></i>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" href="https://www.facebook.com/nicolaus.claus.1">
                <span className="icon">
                    <i className="fab fa-facebook-square"></i>
                </span>
              <span>
                Facebook
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
        )
};

export default Navbar