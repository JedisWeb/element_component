import Row from "./row";
import Col from "./col";
import Container from "./container";
import Aside from "./aside";
import Main from "./main";
import Header from "./header";
import Footer from "./footer";

const components = [Row, Col, Container, Aside, Main, Header, Footer];

const install = Vue => {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};

export { Row, Col, Container, Aside, Main, Header, Footer };

// 全部导入
export default {
  install,
  Row,
  Col,
  Container,
  Aside,
  Main,
  Header,
  Footer
};
