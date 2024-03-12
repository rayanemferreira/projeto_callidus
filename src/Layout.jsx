import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Select, theme } from 'antd';
const { Header, Content, Sider } = Layout;
import { Button, Flex } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDataContext } from './components/contexts/Context.jsx';
import CardPers from './CardPers.jsx';


const Lay = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();



  const items2 = [
    {
      icon: UserOutlined,
      name: "Home",
      options: ['Adicionar Cameras'],
      onClick: () =>
        navigate('/task')
    },
    { icon: NotificationOutlined, name: "Funcionario", options: ['Cadastrar Funcionario'] },
    { icon: LaptopOutlined, name: "Setores", options: ['Adicionar setor'] },
    { icon: UserOutlined, name: "Visitantes", options: ['Cadastrar visitante'],
    onClick: () =>
    navigate('/visitante')},
  ].map((item, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(item.icon),
      label: item.name,
      children: item.options.map((option, j) => {

        return {
          onClick: item.onClick,
          label: option,
        };
      }),
    };
  });

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 60,
              height: '200%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Select
                style={{
                  width: '30%',
                }}
              >
                <Option value="Setor 1">Setor 1</Option>
                <Option value="Setor 2">Setor 2</Option>
                <Option value="Setor 3">Setor 3</Option>
              </Select>
            </div>


            <Content
              style={{
                padding: 24,
                margin: 60,
                height: '200%',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Flex
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ width: '48%', marginBottom: '24px' }}> {/* 48% para dois cards ao lado */}
                  <CardPers />
                </div>
                <div style={{ width: '48%', marginBottom: '24px' }}> {/* 48% para dois cards ao lado */}
                  <CardPers />
                </div>
                <div style={{ width: '48%', marginBottom: '24px' }}> {/* 48% para dois cards ao lado */}
                  <CardPers />
                </div>
                <div style={{ width: '48%', marginBottom: '24px' }}> {/* 48% para dois cards ao lado */}
                  <CardPers />
                </div>
              </Flex>
            </Content>
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
};
export default Lay;