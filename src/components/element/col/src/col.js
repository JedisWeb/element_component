export default {
  name: "ElCol",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    style() {
      let parent = this.$parent;
      while (parent && parent.$options.name != "ElRow") {
        parent = parent.$parent;
      }
      let gutter = parent ? parent.gutter : 0;
      let style = {};
      style.paddingLeft = `${gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
      style.boxSizing = "border-box";
      return style;
    },
    classList() {
      let list = [];
      ["span", "offset"].forEach(item => {
        if (this[item]) {
          list.push(`el-col-${item}-${this[item]}`);
        }
      });
      list.push(this.span ? `el-col-${this.span}` : "");
      let sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach(size => {
        if (typeof this[size] === "number") {
          list.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            list.push(`el-col-${size}-${prop}-${props[prop]}`);
          });
        }
      });
      return list;
    }
  },
  render: function(h) {
    return h(
      this.tag,
      { class: ["el-col", this.classList], style: this.style },
      this.$slots.default
    );
  }
};
