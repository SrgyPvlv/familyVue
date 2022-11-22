<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="surname">Surname</label>
          <input
            type="text"
            class="form-control"
            id="surname"
            required
            v-model="family.surname"
            name="surname"
          />
        </div>
  
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="family.name"
            name="name"
          />
        </div>

        <div class="form-group">
          <label for="fathername">Fathername</label>
          <input
            type="text"
            class="form-control"
            id="fathername"
            required
            v-model="family.fathername"
            name="fathername"
          />
        </div>

        <div class="form-group">
          <label for="birthday">Birthday</label>
          <input
            type="date"
            class="form-control"
            id="birthday"
            required
            v-model="family.birthday"
            name="birthday"
          />
        </div>
  
        <button @click="saveFamily" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newFamily">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import FamilyDataService from "../services/FamilyDataService";
  
  export default {
    name: "add-family",
    data() {
      return {
        family: {
          id: null,
          surname: "",
          name: "",
          fathername: "",
          birthday: "",
        },
        submitted: false
      };
    },
    methods: {
      saveFamily() {
        var data = {
          surname: this.family.surname,
          name: this.family.name,
          fathername: this.family.fathername,
          birthday: this.family.birthday
        };
  
        FamilyDataService.create(data)
          .then(response => {
            this.family.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newFamily() {
        this.submitted = false;
        this.family = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>