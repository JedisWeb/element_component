<template>
  <div :class="['el-container', {'is-vertical': isVertical}]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      validator: val => ['horizontal', 'vertical'].includes(val)
    }
  },
  computed: {
    isVertical() {
      if (this.direction === 'horizontal') {
        return false;
      } else if (this.direction === 'vertical') {
        return true;
      }
      return this.$slots.default.some(vNode => {
        let tag = vNode.componentOptions.tag;
        return tag === 'el-header' || tag === 'el-footer';
      });
    }
  }
};
</script>

<style>
</style>
