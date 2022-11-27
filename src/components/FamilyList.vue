<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by surname or name" v-model="name"/>
          <div class="input-group-append ms-3">
            <button class="btn btn-outline-secondary" type="button" @click="searchName">Search</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Family List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(family, index) in families"
            :key="index"
            @click="setActiveFamily(family, index)"
          >
            {{ family.surname}} {{family.name }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentFamily">
          <h4>Family</h4>
          <div>
            <label><strong>Surname:</strong></label> {{ currentFamily.surname }}
          </div>
          <div>
            <label><strong>Name:</strong></label> {{ currentFamily.name }}
          </div>
          <div>
            <label><strong>Fathername:</strong></label> {{ currentFamily.fathername }}
          </div>
          <div>
            <label><strong>Birthday:</strong></label> {{ currentFamily.birthday }}
          </div>
  
          <RouterLink :to="'/family/'+currentFamily.id" class="badge rounded-pill bg-info">Edit</RouterLink>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Family...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FamilyDataService from "../services/FamilyDataService";
  
  export default {
    name: "families-list",
    data() {
      return {
        families: [],
        currentFamily: null,
        currentIndex: -1,
        name: ""
      };
    },
    methods: {
      retrieveFamilies() {
        FamilyDataService.getAll()
          .then(response => {
            this.families = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveFamilies();
        this.currentFamily = null;
        this.currentIndex = -1;
      },
  
      setActiveFamily(family, index) {
        this.currentFamily = family;
        this.currentIndex = family ? index : -1;
      },
      
      searchName() {
        FamilyDataService.findByName(this.name)
          .then(response => {
            this.families = response.data;
            this.setActiveFamily(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveFamilies();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>