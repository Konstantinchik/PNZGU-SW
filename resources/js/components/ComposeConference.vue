<template>
  <div>
    <h2 class="section-title">{{ title }}</h2>
    <div class="participants-grid-wrapper" ref="gridWrapper">
      <div class="participants-grid" ref="grid">
        <PeopleCard
          v-for="participant in participants"
          :key="participant.name"
          :link="participant.link"
          :name="participant.name"
          :position="participant.position"
          :place="participant.place"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, nextTick } from 'vue';
import PeopleCard from "./PeopleCard.vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  participants: {
    type: Array,
    required: true
  }
});

const gridWrapper = ref(null);
const grid = ref(null);

onMounted(async () => {
  await nextTick();
  if (grid.value && gridWrapper.value) {
    const gridElement = grid.value;
    const firstClone = gridElement.firstElementChild.cloneNode(true);
    const lastClone = gridElement.lastElementChild.cloneNode(true);
    gridElement.insertBefore(lastClone, gridElement.firstElementChild);
    gridElement.appendChild(firstClone);

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = gridElement.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1; // Adjust the scroll speed here
      gridElement.scrollLeft = scrollLeft - walk;
    };

    gridElement.addEventListener('mousedown', startDragging);
    gridElement.addEventListener('mouseleave', stopDragging);
    gridElement.addEventListener('mouseup', stopDragging);
    gridElement.addEventListener('mousemove', move);

    gridElement.addEventListener('touchstart', startDragging);
    gridElement.addEventListener('touchend', stopDragging);
    gridElement.addEventListener('touchmove', move);
  }
});
</script>

<style scoped>

.section-title {
  text-align: center;
  margin-top: 50px;
  font-size: 24px;
  margin-bottom: 20px;
}

.participants-grid-wrapper {
  position: relative;
  overflow: hidden;
  padding: 30px 0; /* Отступы по вертикали */
  display: flex;
  justify-content: center;
  align-items: center;
}

.participants-grid {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  padding: 0 30px; /* Отступы по бокам */
}

.participants-grid::-webkit-scrollbar {
  display: none;
}

.participants-grid > * {
  flex: 0 0 auto;
  width: 250px;
}
</style>
