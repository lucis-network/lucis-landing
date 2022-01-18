// components/layout.js
import React, { useEffect } from "react";
import { Drawer, Layout, Menu } from 'antd';

import AppHeader from './Header'
import AppFooter from './Footer'

const { Header, Footer, Content } = Layout;


const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class AppLayout extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content id="app-main">
          {children}
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    )
  }
}
