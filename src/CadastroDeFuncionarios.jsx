import { Button, Breadcrumb, Form, Input, Select, Row, Col, Avatar, } from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuProp from './MenuProp';
import { v4 as uuidv4 } from 'uuid';
import { useDataContext } from './components/contexts/Context';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';

const columns = [

  {
    title: 'Foto',
    dataIndex: 'foto',
    render: () => <>
      <Avatar size={54} icon={<UserOutlined />} />
    </>,
  },
  {
    title: 'Nome do funcionário',
    dataIndex: 'name',
    render: (_, record) => <div style={{
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'column'

    }}>

      <b>{record.name}</b>
      <a
        style={{
          color: '#7E7E7E'
        }}
      >{record.matricula}</a>

    </div>,
  },
  {
    title: 'Setor',
    dataIndex: 'setor',
    render: (_, record) => <div style={{
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

      background: '#1E1F28',
      borderRadius: '10px'

    }}>
      <a
        style={{
          color: '#FFFFFF'
        }}
      >{record.setor}</a>
    </div>,
  },
  {
    title: 'Ação',
    dataIndex: 'Ação',

    render: (_, record) => <div style={{
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

    }}>
      <EditOutlined />
    </div>,
  },
  Table.SELECTION_COLUMN
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    matricula: '456',
    setor: 'comercial',
    age: 32,
    width: '10%',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    matricula: '786',
    setor: 'T.I.',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    matricula: '112',
    setor: 'Financeiro',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    matricula: '134',
    setor: 'Administrativo',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    
    name: record.name,
  }),
};
const { Option } = Select;

const { Content } = Layout;

const CadastroDeFuncionario = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <Layout
      style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <MenuProp />

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home/Cadastro de Funcionario</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content"
          style={{
            display: 'flex',
            alignitems: 'flex-start'
          }}

        >

          <div
            style={{
              maxWidth: 800,
              width: '100%'
            }}
          >

            <div
            >

              <Divider />

              <Table
                showHeader={false}
                rowSelection={{
                  type: 'checkbox',
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
              />
            </div>
          </div>
        </div>
        <Button onClick={() => navigate("/layout")} type="primary">Voltar</Button>
        <Button onClick={() => navigate("/funcionario")} type="primary">Adicionar Funcionario</Button>

      </Content>
    </Layout >
  );
}

export default CadastroDeFuncionario;