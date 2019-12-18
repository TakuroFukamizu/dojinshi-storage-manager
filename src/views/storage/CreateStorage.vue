<template>
    <v-container class="storage" fluid fill-height>
        <v-layout justify-center align-center>
        <v-flex shrink>
            <h2>Create new storage unit</h2>
            <v-form v-model="valid">
                <v-text-field v-model="nickname" :rules="nameRules" label="Name" required></v-text-field>
                <v-text-field v-model="location" :rules="nameRules" label="Location"></v-text-field>
            </v-form>
            <v-btn @click="create()">Create</v-btn>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import random from 'random-name';

@Component({})
export default class CreateStorage extends Vue {
    nickname:string = "no name";
    location:string = "home";

    mounted() {
        random()
        this.nickname = random.first() + ' ' + random.last();
    }

    create() {
        // 1. send create request
        // 2. show response(uuid, name, location, qr-code)
        // 3. move to view-storage page
        this.$router.push({ name: "view-storage", params: { id: this.nickname }});
    }
}
</script>
