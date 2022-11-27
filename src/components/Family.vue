<template>
    <div v-if="currentFamily" class="edit-form">
      <h4>Family</h4>
      <form>
        <div class="form-group">
          <label for="surname">Surname</label>
          <input type="text" class="form-control" id="surname" v-model="currentFamily.surname"/>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="currentFamily.name"/>
        </div>
        <div class="form-group">
          <label for="fathername">Fathername</label>
          <input type="text" class="form-control" id="fathername" v-model="currentFamily.fathername"/>
        </div>
        <div class="form-group">
          <label for="birthday">Birthday</label>
          <input type="date" class="form-control mb-3" id="birthday" v-model="currentFamily.birthday"/>
        </div>
      </form>
      
      <button class="badge bg-danger mr-3" style="margin-right: 10px;" @click="deleteFamily"> Delete </button>
  
      <button type="submit" class="badge bg-secondary" @click="updateFamily"> Update </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Tutorial...</p>
    </div>
  </template>
  
  <script>
  import FamilyDataService from "../services/FamilyDataService";
  
  export default {
    name: "family",
    data() {
      return {
        currentFamily: null,
        message: ''
      };
    },
    methods: {
      getFamily(id) {
        FamilyDataService.get(id)
          .then(response => {
            this.currentFamily = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
    
      updateFamily() {
        FamilyDataService.update(this.currentFamily.id, this.currentFamily)
          .then(response => {
            console.log(response.data);
            this.message = 'The tutorial was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteFamily() {
        FamilyDataService.delete(this.currentFamily.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "families" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getFamily(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>