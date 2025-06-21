<template>
  <div @click="redirectToPdf">
    <h1>{{ props.title }}</h1>
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as pdfjsLib from 'pdfjs-dist/webpack';
const props = defineProps({
  url:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  scale:{
    type: Number,
    required: true
  }
})
const pdfSrc = ref(props.url);
const pdfCanvas = ref(null);

const loadPdf = async (url) => {
  try {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;

    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: props.scale });
    const canvas = pdfCanvas.value;
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    await page.render(renderContext).promise;
  } catch (error) {
    console.error('Error loading PDF:', error);
  }
};

const redirectToPdf = () => {
  if (pdfSrc.value) {
    window.location.href = pdfSrc.value;
  }
};

onMounted(() => {
  loadPdf(pdfSrc.value);
});
</script>

<style scoped>
h1 {
  margin-top:10px;
  text-align: center;
}

div {
  cursor: pointer;
}

canvas {
  display: block;
  margin: 0 auto;
  border: 1px solid black
}
</style>
