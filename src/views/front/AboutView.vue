<template>
  <n-button-group>
    <n-button @click="activate">
      關於我們
    </n-button>
  </n-button-group>
  <n-drawer v-model:show="active" :width="502">
    <n-drawer-content>
      <template #header>
        Header
      </template>
      <template #footer>
        <n-button>Footer</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const active = ref(false);
    const activate = () => {
      active.value = true;
    };
    return {
      active,
      activate
    };
  }
});
</script>