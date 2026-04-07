<template>
  <div class="card">
    <div class="meta">
      Email: {{ contact.email }} • Location: {{ contact.location }} • {{ contact.status }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact:  Object,
  },
};

</script>