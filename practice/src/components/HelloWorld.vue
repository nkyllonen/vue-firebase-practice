<template>
   <div>
  <h1>Locations:</h1>
  <article v-for="(location, idx) in locations" :key="idx">
    <img :src="location.image">
    <h2>{{ location.name }}</h2>
  </article>

  <form @submit="addLocation(name, image)">
    <input v-model="name" placeholder="Location Name">
    <input v-model="image" placeholder="Location Image URL">
    <button type="submit">Add New Location</button>
  </form>

  </div>

</template>

<script>
// get db variable from main.js
import { db } from '../main'

export default {
  name: 'HelloWorld',
  // data : models the initial properties used by the component
  data () {
    return {
      locations: [],
      name: '',
      image: ''
    }
  },
  // query the db
  firestore () {
    return {
      locations: db.collection('locations').orderBy('createdAt')
    }
  },
  methods: { 
    addLocation (name, image) {
      const createdAt = new Date()
      db.collection('locations').add({ name, image, createdAt })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
