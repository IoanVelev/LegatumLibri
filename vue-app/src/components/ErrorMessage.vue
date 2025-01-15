<script>
export default {
props: {
    errors: {
        type: Array,
        required: true,
    }
}
}
</script>

<template>
<div class="err-message">
    <strong
        v-for="error of errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </strong>
</div>
</template>

<style scoped>
.err-message {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: red;
}
</style>