import React from 'react'
import {Outlet , Link} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
// import Tabs from './components/Tabs';
import { Layout } from 'antd';
import { Radio } from 'antd';
const { Content } = Layout;




export default function App() {
  return (
    <div>
        <Layout id='app'>
            <Header />
            <Content>

                <Outlet/>
            </Content>
            <Footer/>
        </Layout>
    </div>
  )
}
