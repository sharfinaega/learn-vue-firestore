<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Board
        <b-link href="#/">(Board List)</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group
            id="titleGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter Title"
          >
            <b-form-input id="title" v-model.trim="board.title"></b-form-input>
          </b-form-group>
          <b-form-group
            id="descGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter Description"
          >
            <b-form-textarea
              id="description"
              v-model="board.description"
              placeholder="Enter something"
              :rows="2"
              :max-rows="6"
            >{{ board.description }}</b-form-textarea>
          </b-form-group>
          <b-form-group
            id="authorGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter Author"
          >
            <b-form-input id="author" v-model.trim="board.author"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";
// import { firestore } from "firebase";

export default {
  name: "AddBoard",
  data() {
    return {
      ref: firebase.firestore().collection("boards"),
      board: {}
    };
  },
  methods: {
    onSubmit() {
      //   console.log(evt);
      console.log(this.board);

      //   evt.prefentDefault();
      this.ref
        .doc()
        .set({
          title: this.board.title,
          description: { name: "ega", age: "20" },
          author: this.board.author
        })
        .then(() => {
          console.log("daata berhasil disimpan");
          this.board.title = "";
          this.board.description = "";
          this.board.author = "";

          router.push({
            name: "BoardList"
          });
        })
        .catch(error => {
          alert("Error adding document: ", error);
        });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
