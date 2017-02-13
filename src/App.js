import React, {Component} from "react";
import {Layout, Menu, Breadcrumb} from "antd";
import Main from "./Main";
import "./App.css";
const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Layout className="layout">
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
				<Content style={{ padding: '0 50px', display:'flex', flexDirection:'column' }}>
					<Breadcrumb style={{ margin: '12px 0' }}>
						<Breadcrumb.Item>Predina</Breadcrumb.Item>
						<Breadcrumb.Item>Battery Predictor</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ background: '#fff', padding: 24, flex: 1 }}>
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
