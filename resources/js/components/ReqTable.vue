<template>
  <div class="table-container">
    <h2><font-awesome-icon icon="list" class="icon" /> {{ t('reqPage.reqTable.requirementsTitle') }}</h2>
    <table>
      <thead>
      <tr>
        <th>{{ t('reqPage.reqTable.parameter') }}</th>
        <th>{{ t('reqPage.reqTable.requirements') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ t('reqPage.reqTable.textEditor') }}</td>
        <td>{{ t('reqPage.reqTable.textEditorRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.pageFormat') }}</td>
        <td>{{ t('reqPage.reqTable.pageFormatRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.margins') }}</td>
        <td>{{ t('reqPage.reqTable.marginsRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.font') }}</td>
        <td>{{ t('reqPage.reqTable.fontRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.pageNumbering') }}</td>
        <td>{{ t('reqPage.reqTable.pageNumberingRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.imagesTablesFormulas') }}</td>
        <td>{{ t('reqPage.reqTable.imagesTablesFormulasRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.articleStructure') }}</td>
        <td>
          <ol class="custom-list">
            <li>{{ t('reqPage.reqTable.articleStructureRequirements1') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements2') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements3') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements4') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements5') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements6') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements7') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements8') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements9') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements10') }}</li>
            <li>{{ t('reqPage.reqTable.articleStructureRequirements11') }}</li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.abstract') }}</td>
        <td>{{ t('reqPage.reqTable.abstractRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.keywords') }}</td>
        <td>{{ t('reqPage.reqTable.keywordsRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.literatureList') }}</td>
        <td>{{ t('reqPage.reqTable.literatureListRequirements') }}</td>
      </tr>
      <tr>
        <td>{{ t('reqPage.reqTable.authorInfo') }}</td>
        <td>
          <ul class="custom-list">
            <li>{{ t('reqPage.reqTable.authorInfoRequirements1') }}</li>
            <li>{{ t('reqPage.reqTable.authorInfoRequirements2') }}</li>
            <li>{{ t('reqPage.reqTable.authorInfoRequirements3') }}</li>
            <li>{{ t('reqPage.reqTable.authorInfoRequirements4') }}</li>
          </ul>
          <p>{{ t('reqPage.reqTable.authorInfoNote') }}</p>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.table-container {
  padding: 20px;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

h2 {
  color: #8DBB5B;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  margin-right: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #8DBB5B;
  color: white;
}

.custom-list {
  list-style-position: inside;
}

.custom-list li {
  margin-bottom: 10px;
}

.custom-list li::marker {
  font-weight: bold;
  color: #8DBB5B;
}
</style>
