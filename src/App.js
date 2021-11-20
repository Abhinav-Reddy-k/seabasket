import "./App.css";
import {
  Col,
  Layout,
  Menu,
  Row,
  Space,
  Typography,
  List,
  Card,
  Collapse,
} from "antd";
import { getCategories } from "./firebase/firestoreService";
import { useEffect, useState } from "react";

function App() {
  const { Content, Footer } = Layout;
  const { Title } = Typography;
  const { Meta } = Card;
  const { Panel } = Collapse;

  const [categories, setCategories] = useState([]);
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa tempora sint perferendis distinctio nobis tenetur et inventore, reiciendis blanditiis accusamus nesciunt quos voluptatum alias amet beatae ipsum velit doloribus";
  useEffect(() => {
    getCategories().then((qs) =>
      qs.forEach((doc) =>
        setCategories((categories) => [...categories, doc.data()])
      )
    );
  }, [text]);
  console.log(categories);

  return (
    <>
      <Layout className="layout">
        <Menu
          style={{
            width: "100%",
            display: "block",
          }}
          mode="horizontal"
          defaultSelectedKeys={["4"]}
        >
          <Menu.Item key="logo">Sea-Basket</Menu.Item>
          <Menu.Item key="4" style={{ float: "right" }}>
            Login
          </Menu.Item>
          <Menu.Item key="3" style={{ float: "right" }}>
            My Cart
          </Menu.Item>
          <Menu.Item key="2" style={{ float: "right" }}>
            FAQs
          </Menu.Item>
          <Menu.Item key="1" style={{ float: "right" }}>
            Category
          </Menu.Item>
        </Menu>
        <Content style={{ padding: "0 50px" }}>
          <div className="bg" style={{ height: "500px" }}></div>
          <Space style={{ width: "100%" }} direction="vertical" size={60}>
            <Row justify="center" style={{ marginTop: "30px" }}>
              <Title level={2}>HOW IT WORKS</Title>
            </Row>
            <Row justify="center" style={{ marginTop: "-60px" }}>
              <Title level={4} type="secondary">
                Sea-basket deliver fresh sources seafood in a few easy clicks
              </Title>
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <Title level={3}>Categories</Title>
            </Row>
            <Row justify="space-around">
              {categories.map((obj) => (
                <Card
                  hoverable
                  style={{ width: 300, height: 200 }}
                  cover={<img alt="example" height="150px" src={obj.image} />}
                >
                  <Meta title={obj.name} />
                </Card>
              ))}
            </Row>
            <Row justify="center" style={{ marginTop: "20px" }}>
              <Title level={3}>A Glance at our product</Title>
            </Row>
            <Row justify="center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/24fKw5yH7NE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Row>
            <Row justify="center">
              <Title level={3}>FAQs</Title>
            </Row>
            <Row justify="center">
              <Collapse style={{ width: "50%" }}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Row>
            <Row justify="center">
              <Title level={3}>Have a read</Title>
            </Row>
            <Row justify="center">
              <Card
                type="inner"
                style={{ width: "50%" }}
                title="Card title"
                extra={<a href="#">Read More</a>}
              >
                {text}
              </Card>
            </Row>
            <Row justify="center">
              <Card
                type="inner"
                style={{ width: "50%" }}
                title="Card title"
                extra={<a href="#">Read More</a>}
              >
                {text}
              </Card>
            </Row>
            <Row justify="center">
              <Card
                type="inner"
                style={{ width: "50%" }}
                title="Card title"
                extra={<a href="#">Read More</a>}
              >
                {text}
              </Card>
            </Row>
            <Row justify="center">
              <Title level={3}>Topics you cant miss</Title>
            </Row>
            <Row justify="center">
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                type="inner"
                style={{ width: "50%" }}
                title="Card title"
                extra={<a href="#">Read More</a>}
              >
                {text}
              </Card>
            </Row>
            <Row justify="center">
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                type="inner"
                style={{ width: "50%" }}
                title="Card title"
                extra={<a href="#">Read More</a>}
              >
                {text}
              </Card>
            </Row>
            <Row justify="center">
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                type="inner"
                style={{ width: "50%" }}
                title="Card title"
                extra={<a href="#">Read More</a>}
              >
                {text}
              </Card>
            </Row>
          </Space>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "blueviolet",
            color: "white",
            marginTop: "50px",
          }}
        >
          <Row justify="space-around">
            <Col span={12} className="whiteText">
              Logo
            </Col>
            <Col>
              <List size="small">
                <List.Item className="whiteText">Support</List.Item>
                <List.Item className="whiteText">About Us</List.Item>
                <List.Item className="whiteText">Privacy Policy</List.Item>
              </List>
            </Col>
            <Col>
              <List.Item className="whiteText">Terms & conditions</List.Item>
              <List.Item className="whiteText">Return & refund</List.Item>
              <List.Item className="whiteText">
                Shipping & delivery policy
              </List.Item>
            </Col>
          </Row>
          Sea Basket | All rights reserved | ©2021
        </Footer>
      </Layout>
    </>
  );
}

export default App;
