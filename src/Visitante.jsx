import React from 'react';
import { Button, Breadcrumb, Form, Input, Select, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuProp from './MenuProp';
import { v4 as uuidv4 } from 'uuid';
import { useDataContext } from './components/contexts/Context';
import { Layout } from 'antd';

const { Option } = Select;

const { Content } = Layout;

const Visitante = () => {
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
          <Breadcrumb.Item>Home/</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content"
          style={{
            display: 'flex',
            alignitems: 'flex-start'
          }}

        >

          <Form
            form={form}

            style={{
              maxWidth: 800,
              width: '100%'
            }}
          >
            <Col span={24} >
              <Form.Item
                label="Nome "
                name="Nome "
                rules={[
                  {
                    required: true,
                    message: 'Por favor, informe o código!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Row >
              <Col span={8} >
                <Form.Item
                  label="CPF"
                  name="CPF"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe o IP!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8} >
                <Form.Item
                  label="Setores Permitidos"
                  name="Setor Permitidos"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe o IP!',
                    },
                  ]}
                >
                  <Select>
                    <Option value="Setor 1">Setor 1</Option>
                    <Option value="Setor 2">Setor 2</Option>
                    <Option value="Setor 3">Setor 3</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={8} >

                <Form.Item
                  label="Validade do Cadastro"
                  name="Validade do Cadastro"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe o IP!',
                    },
                  ]}
                >
                  <Select>
                    <Option value="1">1 dia </Option>
                    <Option value="2">3 dias </Option>
                    <Option value="3">7 dias </Option>
                    <Option value="4">15 dias </Option>
                  </Select>
                </Form.Item>
              </Col>

            </Row>


            <Form.Item

            >
              <Button onClick={() => navigate("/layout")} type="primary">Voltar</Button>
              <Button
                style={{
                  marginLeft: '10px'
                }}
                type="primary" htmlType="submit">Avançar</Button>
            </Form.Item>
          </Form>
        </div>

      </Content>
    </Layout >
  );
}

export default Visitante;
