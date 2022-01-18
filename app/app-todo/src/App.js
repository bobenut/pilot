import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import TaskList from './pages/TaskList';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="App-logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['menuTask']}>
            <Menu.Item key='menuTask'>任务</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>任务</Breadcrumb.Item>
            <Breadcrumb.Item>列表</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content"><TaskList></TaskList></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TODO ©2021 Created by Bobenut</Footer>
      </Layout>
    </div>
  );
}

export default App;
