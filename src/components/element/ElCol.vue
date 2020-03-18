<template>
  <div :class="['el-col', classList]"
       :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElCol',
  props: {
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
      while (parent && parent.$options.name != 'ElRow') {
        parent = parent.$parent;
      }
      let gutter = parent ? parent.gutter : 0;
      let style = {};
      style.paddingLeft = `${gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
      style.boxSizing = 'border-box';
      return style;
    },
    classList() {
      let list = [];
      ['span', 'offset'].forEach(item => {
        if (this[item]) {
          list.push(`el-col-${item}-${this[item]}`);
        }
      });
      list.push(this.span ? `el-col-${this.span}` : '');
      let sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
      sizes.forEach(size => {
        if (typeof this[size] === 'number') {
          list.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            list.push(`el-col-${size}-${prop}-${props[prop]}`);
          });
        }
      });
      return list;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-col {
  float: left;
}

@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i / 24 * 100%;
  }

  .el-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
}
@media only screen and (max-width: 768px -1) {
  @for $i from 0 through 24 {
    .el-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xs-push-#{$i} {
      margin-left: $i / 24 * 100;
    }
    .el-col-xs-pull-#{$i} {
      margin-right: $i / 24 * 100;
    }
  }
}

@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .el-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-sm-push-#{$i} {
      margin-left: $i / 24 * 100;
    }
    .el-col-sm-pull-#{$i} {
      margin-right: $i / 24 * 100;
    }
  }
}

@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .el-col-md-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-md-push-#{$i} {
      margin-left: $i / 24 * 100;
    }
    .el-col-md-pull-#{$i} {
      margin-right: $i / 24 * 100;
    }
  }
}

@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .el-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-lg-push-#{$i} {
      margin-left: $i / 24 * 100;
    }
    .el-col-lg-pull-#{$i} {
      margin-right: $i / 24 * 100;
    }
  }
}

@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .el-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xl-push-#{$i} {
      margin-left: $i / 24 * 100;
    }
    .el-col-xl-pull-#{$i} {
      margin-right: $i / 24 * 100;
    }
  }
}
</style>
