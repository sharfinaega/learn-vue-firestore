import Vue from "vue";
import VueRouter from "vue-router";
import BoardList from "@/components/BoardList";
import AddBoard from "@/components/AddBoard";
import EditBoard from "@/components/EditBoard";
import ShowBoard from "@/components/ShowBoard";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "BoardList",
      component: BoardList
    },
    {
      path: "/add-board",
      name: "AddBoard",
      component: AddBoard
    },
    {
      path: "/edit-board/:id",
      name: "EditBoard",
      component: EditBoard
    },
    {
      path: "/show-board/:id",
      name: "ShowBoard",
      component: ShowBoard
    }
  ]
});
