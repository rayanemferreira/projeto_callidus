import React from 'react';
import { Button, Form, Input, Select, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuProp from './MenuProp';
import { v4 as uuidv4 } from 'uuid';
import { useDataContext } from './components/contexts/Context';
import { Layout } from 'antd';

const { Option } = Select;

const { Content } = Layout;

const Setor = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <Layout>
      <MenuProp />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">

          <Form
            form={form}
            labelCol={{
              xs: { span: 24 },
              sm: { span: 6 },
            }}
            wrapperCol={{
              xs: { span: 24 },
              sm: { span: 14 },
            }}
            style={{
              maxWidth: 600,
            }}
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Nome "
                  name="Nome"
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
              <Col span={8}>
                <Form.Item
                  label="Codigo"
                  name="Codigo"
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
            </Row>

            <Form.Item
              label="Descrição"
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Por favor, informe a descrição!',
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
                gap: 2
              }}
            >
              <Button onClick={() => navigate("/layout")} type="primary">Voltar</Button>
              <Button type="primary" htmlType="submit">concluir</Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}

export default Setor;
