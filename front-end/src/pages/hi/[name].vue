<script lang="ts" setup>
const router = useRouter();
const route = useRoute("/hi/[name]");
const user = useUserStore();
const { t } = useI18n();

watchEffect(() => {
  user.setNewName(route.params.name);
});
useHead({
  title: () => t("intro.hi", { name: user.savedName })
});
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p>
      {{ t("intro.hi", { name: user.savedName }) }}
    </p>
    
    <p opacity-75 text-sm>
      <em>{{ t("intro.dynamic-route") }}</em>
    </p>
    
    <template v-if="user.otherNames.length">
      <div mt-4 text-sm>
        <span opacity-75>{{ t("intro.aka") }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>
    
    <div>
      <button btn m="3 t6" text-sm @click="router.back()">
        {{ t("button.back") }}
      </button>
    </div>
  </div>
</template>
