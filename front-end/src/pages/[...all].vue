<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <div>
    {{ t("not-found") }}
  </div>
</template>

<route lang="json">
{
"meta": {
"layout": "404"
}
}
</route>
