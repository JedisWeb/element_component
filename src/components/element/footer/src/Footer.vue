<template>
  <div class="el-footer">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElFooter',
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
