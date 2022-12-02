<template>
  <section class="main">
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in items()" :key="i">
        <v-expansion-panel-header>
          <b>
            {{ item.title }}
          </b>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ item.description }}

          <div class="mt-2">
            <div v-for="(perk, index) in item.perks" :key="index" class="mt-1">
              <div>
                <b>{{ index + 1 }}. {{ perk.title }}</b>
              </div>
              <div>
                {{ perk.description }}
              </div>
              <div><b>Перезарядка:</b> {{ perk.reload }}</div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
import items from "@/pages/items";
export default {
  name: "MainPage",
  data: () => ({
    items,
  }),
};
</script>
