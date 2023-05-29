<template>
  <v-layout class="mb-16">
    <v-app-bar color="teal-darken-4">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <v-app-bar-title class="cursor-pointer"><router-link to="/">CRUD</router-link></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn>
        <router-link to="/login">Login</router-link>
      </v-btn>

    </v-app-bar>
  </v-layout>
</template>