<template>
  <v-container class="storage" fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <p>ID: {{id}}</p>
        <p>Name: {{nickname}}</p>
        <p>Location: {{location}}</p>
        <qrcode :value="qrvalue" :options="{ size: 200 }"></qrcode>
        <p>{{$route.params.id}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
    components: {
        HelloWorld,
    },
})
export default class Storage extends Vue {
    id: string = "xxxxx-xxxxxx-xxxxxxxx-xxxxxx";
    nickname: string = "";
    location: string = "";
    qrvalue: string = "";

    mounted() {
        this.id = this.$route.params.id;
        this.qrvalue = `https://example.com/storage/${this.id}`;
        // TODO: load storage data from db
    }
}
</script>
