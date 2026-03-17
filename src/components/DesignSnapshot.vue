<template>
  <div class="card">
    <div class="split">
      <div>
        <strong>{{ design.left.title }}</strong>
        <ul>
          <li v-for="(b, i) in design.left.bullets" :key="i">{{ b }}</li>
        </ul>
      </div>

      <div>
        <strong>{{ design.right.title }}</strong>
        <ul>
          <li v-for="(b, i) in design.right.bullets" :key="i">{{ b }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    design: Object,  
  },
};
</script>