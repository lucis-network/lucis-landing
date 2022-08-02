// components/layout.js
import React from "react";

import AppHeader from "./header/Header";
// import AppHeader from "./Header";
// import AppFooter from "./Footer";
import AppFooter from "./footer/Footer";
export default class AppLayout extends React.Component {
  
  render() {
    const { children } = this.props;
    return (
      <div className="app-layout">
        <AppHeader />
        <div id="app-main">{children}</div>
        <AppFooter />
      </div>
    );
  }
}
