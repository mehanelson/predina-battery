import React, {Component} from "react";
import {Layout, Menu, Breadcrumb} from "antd";
import Main from "./Main";
import "./App.css";
const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Layout className="layout" style={{display:'flex', flexDirection:'column'}}>
				<Header>
					<div className="logo"/>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={[ '1' ]}
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key="1">Battery Predictor</Menu.Item>
					</Menu>
				</Header>
				<Breadcrumb style={{ padding:"0 50px", margin: '12px 0' }}>
					<Breadcrumb.Item>Predina</Breadcrumb.Item>
					<Breadcrumb.Item>Battery Predictor</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ padding: '0 50px', flex: 1 }}>
					<div style={{ background: '#fff', padding: 24, minHeight:"100%" }}>
						<Main />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					© Predina 2016
				</Footer>
			</Layout>
		);
	}
}

export default App;
