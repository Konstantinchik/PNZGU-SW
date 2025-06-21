<template>
  <tr>
    <td v-for="column in columns" :key="column.key">
      <template v-if="column.type==='url'">
        <a class="url" :href="item[column.key]">открыть</a>
      </template>
      <template v-else-if="!item.isEditing||!column.isEditable">
        <template v-if="column.type === 'select'">
          {{ getOptionName(item, column) }}
        </template>
        <template v-else>
          {{ item[column.key] }}
        </template>
      </template>
      <template v-else-if="column.isEditable">
        <input
          v-if="column.type === 'text' || column.type === 'email'"
          :type="column.type"
          v-model="item[column.key]"
          :class="{ 'invalid': item.errors && item.errors[column.key] }"
        />
        <select v-if="column.type === 'select'" v-model="item[column.key]">
          <option v-for="option in column.options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span v-if="item.errors && item.errors[column.key]" class="error-message">
          {{ item.errors[column.key] }}
        </span>
      </template>
    </td>
    <td>
      <TableActions
        :item="item"
        @edit="emit('edit', item)"
        @save="emit('save', item)"
        @delete="emit('delete', index)"
        @cancel="emit('cancel', item)"
        @toggleExpand="emit('toggleExpand', item)"
      />
    </td>
  </tr>
  <tr v-if="item.isExpanded" class="expanded-row">
    <td :colspan="columns.length + 1">
      <div class="expanded-content">
        <table>
          <thead>
          <tr>
            <th v-for="additionalColumn in additionalColumns" :key="additionalColumn.key">
              {{ additionalColumn.label }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(additionalItem, idx) in item.additionalInfo" :key="idx">
            <td v-for="additionalColumn in additionalColumns" :key="additionalColumn.key">
              {{ additionalItem[additionalColumn.key] }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import TableActions from './TableActions.vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  additionalColumns: {
    type: Array,
    required: true,
  }
});

const emit = defineEmits(['edit', 'save', 'delete', 'cancel', 'toggleExpand']);

function getOptionName(item, column) {
  return column.options.find(option => option.value === item[column.key]).text;
}
</script>

<style scoped>
td{
  border: 1px solid #ddd;
  padding: 5px;
}

.url {
  color: #2c3e50;
  text-decoration: underline;
}

.invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.8em;
}

.expanded-row {
  background-color: #f9f9f9;
}

.expanded-content {
  padding: 10px;
}
</style>
