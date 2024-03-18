import React from 'react';
import { Button, Breadcrumb, Form, Input, Select, Row, Col, Radio} from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuProp from './MenuProp';
import { v4 as uuidv4 } from 'uuid';
import { useDataContext } from './components/contexts/Context';
import { Layout } from 'antd';

const { Option } = Select;

const { Content } = Layout;

const Funcionario = () => {
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

          <Form
            form={form}

            style={{
              maxWidth: 800,
              width: '100%'
            }}
          >
            <Col span={24} >
              <Form.Item
                label="Nome:"
                name="Nome "
                rules={[
                  {
                    required: true,
                    message: 'Por favor, informe o nome',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Row >
              <Col span={8} >
                <Form.Item
                  label="Matricula"
                  name="Matricula"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe a matricula!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8} >
                <Form.Item
                  label="Cargo"
                  name="Cargo"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe o cargo',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={8} >

                <Form.Item
                  label="Setor"
                  name="Setor"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe o setor',
                    },
                  ]}
                >
                  <Select>
                    <Option value="1">Setor 1 </Option>
                    <Option value="2">Setor 2 </Option>
                    <Option value="3">Setor 3</Option>
                    <Option value="4">Setor 4 </Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={8} >
                <Form.Item
                  label="Supervisor?"
                  name="dd"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe o cargo',
                    },
                  ]}
                >
                    <Radio.Group>
                      <Radio value={1}>SIM</Radio>
                      <Radio value={2}>NAO</Radio>

                    </Radio.Group>
                  
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

export default Funcionario;