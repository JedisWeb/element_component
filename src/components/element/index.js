import Row from './row';
import Col from './col';

const components = [Row, Col];

const install = (Vue) => {
  components.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export { Row, Col };

// 全部导入
export default {
  install,
  Row,
  Col,
};
