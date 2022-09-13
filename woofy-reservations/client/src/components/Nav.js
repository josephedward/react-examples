import React, { Component, createRef } from "react";
import { Dropdown, Icon, Input, Menu, Popup } from "semantic-ui-react";
import LoginLogout from "./LoginLogout";

class Nav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  //FOR LOGIN
  contextRef = createRef();
  toggle = () => this.setState(prevState => ({ open: !prevState.open }));

  render(props) {
    const { activeItem } = this.state;

    return (
      <nav>
        <Menu stackable style={woofStyle}>
          <Menu.Item style={{}}>
            <a
              href="/"
              style={{
                ...woof1
              }}
            >
              Woofy Wellness Ranch
            </a>
          </Menu.Item>

          <Menu.Menu
            style={{
              fontFamily: "'Lusitana', Georgia, serif"
            }}
            position="right"
          >
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              href="/wpblog"
            >
              Home
            </Menu.Item>
            <Menu.Item
              name="reservations"
              active={activeItem === "reservations"}
              onClick={this.handleItemClick}
              href="/reservations"
            >
              Reservation
            </Menu.Item>
            <Menu.Item
              name="woofybus"
              active={activeItem === "woofybus"}
              onClick={this.handleItemClick}
              href="/woofymap"
            >
              Pickup - Dropoff
            </Menu.Item>
            <Menu.Item>
              <Input
                style={{
                  fontFamily: "'Lusitana', Georgia, serif"
                }}
                className="icon"
                icon="search"
                placeholder="Search..."
              />{" "}
            </Menu.Item>

            <Dropdown
              item
              text="Account"
              name="Account"
              active={activeItem === "Account"}
            >
              <Dropdown.Menu>
                <Dropdown.Item
                 icon="address book"
                 active={activeItem === "profile"}
                  href="/userprofile"
                 text="Profile" />
                <Dropdown.Item 
                icon="globe" text="Choose Language" />
                <Dropdown.Item icon="settings" text="Account Settings" />
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
            <LoginLogout/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </nav>
    );
  }
}

export default Nav;

const logStyle = {
  right: "0px",
  left: "auto",
  opacity: 1,
  backgroundColor: "lightyellow"
};

const woof1 = {
  color: "gold",
  "-webkit-text-stroke": ".5px black",
  "-webkit-text-fill-color": "black",
  fontSize: "40px",
  fontFamily: "Apple Chancery",
  color: "#2fc0cd",
  fontWeight: "400"
};

const woofStyle = {
  borderBottom: "3px solid darkblue",
  backgroundColor: "gold"
};
