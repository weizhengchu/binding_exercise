const app = Vue.createApp({
  data() {
    return {
      name: "Jessie",
      age: 5,
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rufous-collared_sparrow_%28Zonotrichia_capensis_costaricensis%29_2.jpg/1920px-Rufous-collared_sparrow_%28Zonotrichia_capensis_costaricensis%29_2.jpg",
    };
  },
  methods: {
    fiveAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.round(Math.random(2));
    },
  },
});

app.mount("#assignment");
