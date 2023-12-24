<!-- src/components/Table.vue -->
<template>
    <table class="custom-table">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(data, dataIndex) in row" :key="dataIndex">{{ data }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      headers: {
        type: Array,
        default: () => [],
      },
      rows: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for the table */
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .custom-table th, .custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .custom-table th {
    background-color: #f2f2f2;
  }
  </style>
  