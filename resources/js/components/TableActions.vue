<template>
  <div>
    <button v-if="!item.isEditing" @click="emit('edit', item)">
      <font-awesome-icon icon="pen" class="icon"/>
    </button>
    <button v-if="item.isEditing" @click="emit('save', item)">
      <font-awesome-icon icon="save" class="icon"/>
    </button>
    <button v-if="!item.isEditing" @click="emit('delete', index)">
      <font-awesome-icon icon="trash" class="icon"/>
    </button>
    <button v-if="item.isEditing" @click="emit('cancel', item)">
      <font-awesome-icon icon="cancel" class="icon"/>
    </button>
    <button v-if="item.additionalInfo && item.additionalInfo.length" @click="emit('toggleExpand', item)">
      <font-awesome-icon :icon="item.isExpanded ? 'chevron-up' : 'chevron-down'" class="icon"/>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['edit', 'save', 'delete', 'cancel', 'toggleExpand']);
</script>

<style scoped>
.icon {
  margin: 10px;
  width: 15px;
  height: 15px;
  color: #2c3e50;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
