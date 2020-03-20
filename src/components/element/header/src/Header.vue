<template>
  <div class='el-footer'
       :style="{height}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
};
</script>

<style>
</style>
