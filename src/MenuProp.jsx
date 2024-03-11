import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

const MenuProp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2 = [
    { icon: UserOutlined, name: "Home", options: ['Adicionar Cameras'] },
    { icon: NotificationOutlined, name: "Funcionario", options: ['Cadastrar Funcionario'] },
    { icon: LaptopOutlined, name: "Setores", options: ['Adicionar setor'] },
    { icon: UserOutlined, name: "Visitantes", options: ['Cadastrar visitante'] },
  ].map((item, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(item.icon),
      label: item.name,
      children: item.options.map((option, j) => {
        return {
          label: option,
        };
      }),
    };
  });

  return (
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
  );
};

export default MenuProp;
