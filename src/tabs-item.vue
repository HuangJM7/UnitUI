<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "unit-tabs-item",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      tyep: [String | Number],
      required: true
    }
  },
  computed: {
    classes() {
      return { active: this.active, disabled: this.disabled };
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      //防御性编程,方便测试
      // this.eventBus.$emit("update:selected", this.name, this);
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click"); //可测试代码
    }
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
  }
};
</script>
<style lang='scss' scoped>
$blue: blue;
$disabled-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style> 