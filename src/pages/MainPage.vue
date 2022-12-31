<template>
  <section class="main">

  <div>
  <b>Приавила: </b>
  <ol>
  <li>Одину и ту же способность нельзя применять 2 раза подряд на одного и того же человека</li>
  <li>В случае не выполенния задания человек должен сыграть в правду или действие с приминившем спообность человеком</li>
  </ol>
  </div> 
    <v-expansion-panels  class="main__cards">
      <v-expansion-panel v-for="(item, i) in items()" :key="i">
        <v-expansion-panel-header>
          <b>
            {{ item.title }}
          </b>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
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
