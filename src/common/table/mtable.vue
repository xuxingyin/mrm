<template>
<table>
  <thead>
    <tr>
      <th v-for="key in columns">{{key}}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="entry in data">
      <td v-for="key in columns">{{entry[key]}}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default{
  props:{
    
  }
}
</script>
