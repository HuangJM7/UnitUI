<template>
  <svg class="u-icon" aria-hidden="true" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./iconfont";//iconfont数据

export default {
  name:'unit-icon',
  props: {
    name
  }
};
</script>

<style lang="scss">
.u-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>