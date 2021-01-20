<template>
  <div class="about">
    <h1>This is an mine page</h1>

    <Tabbar></Tabbar>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Tabbar from '../../components/tabbar.vue'
    @Component({
        components: {
            Tabbar
        }
    })
    export default class Apps extends Vue {

    }

</script>
