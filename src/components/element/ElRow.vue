<template>
  <div :class="[
    'el-row',
    { 'el-row--flex' : this.type === 'flex'},
    this.justify !== 'start' && `is-justify-${this.justify}`,
    this.align !== 'top' && `is-align-${this.align}`
  ]"
       :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: val =>
        ['start', 'end', 'center', 'space-between', 'space-around'].includes(
          val
        )
    },
    align: {
      type: String,
      default: 'top',
      validator: val => ['top', 'middle', 'bottom'].includes(val)
    }
  },
  computed: {
    style() {
      if (this.gutter) {
        let style = {}
        style.marginLeft = `${-this.gutter / 2}px`
        style.marginRight = style.marginLeft
        return style
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  &::before,
  &::after {
    content: '';
    display: block;
  }

  &::after {
    clear: both;
  }

  &--flex {
    display: flex;
  }

  &.is-justify-center {
    justify-content: center;
  }

  &.is-justify-end {
    justify-content: flex-end;
  }

  &.is-justify-space-between {
    justify-content: space-between;
  }

  &.is-justify-space-around {
    justify-content: space-around;
  }

  &.is-align-middle {
    align-items: center;
  }

  &.is-align-bottom {
    align-items: flex-end;
  }
}
</style>
