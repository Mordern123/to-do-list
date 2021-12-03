<template>
<section class="container">
  <div class="heading">
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-book" viewBox="0 0 24 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
    </svg>
    <h1 class="heading__title">To-Do List</h1>
  </div>
  <form class="form">
    <div>
      <label class="form__label" for="todo">~ my fxxking life ~</label>
      <input class="form__input"
           placeholder="ready to do~"
           type="text"
           v-model="msg"
           size="30"
           required>
      <button class="button" @click="createSubmit"><span>Submit</span></button>
    </div>
  </form>
  <div>
    <ul class="toDoList">
      <li v-for="(item, index) in todos" :key="item.id">
        <button class="content" @click="deleteSubmit(item, index)">
          {{ item.content }}
        </button>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      todos: []
    }
  },
  methods: {
    createSubmit () {
      const msg = {
        id: this.todos.length + 1,
        content: this.msg,
        complete: false
      }
      this.todos.push(msg)
      this.msg = ''
    },
    deleteSubmit (item, index) {
      const result = confirm(`Delete fxxking life:${item.content}?`)
      if (result) {
        this.todos.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Gochi+Hand');
@import url('https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap');

body {
  background-color: #003366;
  min-height: 70vh;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999933;
  font-family: 'Gochi Hand', cursive;
  text-align: center;
  font-size: 130%;
}

.container {
  width: 100%;
  height: auto;
  min-height: 550px;
  max-width: 500px;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 30px 30px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box;
}
.heading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.heading__title {
  transform: rotate(6deg);
  padding: 0.2rem 1.2rem;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  background-color: #336699;
  font-size: 1.5rem;
}
@media only screen and (min-width: 500px) {
  .heading__title{
    font-size: 2.5rem;
  }
}
.heading__img {
  width: 24%;
}
.form__label {
  display: block;
  margin-bottom: 0.5rem;
}
.form__input {
    box-sizing: border-box;
    background-color: transparent;
    padding: 0.7rem;
    border-bottom-right-radius: 15px 3px;
    border-bottom-left-radius:3px 15px;
    border: solid 3px transparent;
    border-bottom: dashed 3px #999933;
    font-family: 'Fuzzy Bubbles', cursive;
    font-size: 1rem;
    color: hsla(260, 2%, 25%, 0.7);
    width: 70%;
    margin-bottom: 20px;
  &:focus {
    border: solid 3px #999933;
  }
}
@media only screen and (min-width: 500px) {
 .form__input {
    width: 60%;
  }
}

.button {
  padding: 0;
  border: none;
  transform: rotate(6deg);
  transform-origin: center;
  font-family: 'Gochi Hand', cursive;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 5px;
  box-shadow: 0 2px 0 hsl(198, 1%, 29%);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: #336699;
}
.button span {
  background: #f1f5f8;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid hsl(198, 1%, 29%);
}
.button:active, .button:focus {
  transform: translateY(4px);
  padding-bottom: 0px;
  outline: 0;
}
.toDoList {
  text-align: left;
  .content{
    font-family: 'Fuzzy Bubbles', cursive;
    position: relative;
    padding: 0.5rem;
    border:none;
    background-color: transparent;
  }
  .content:hover {
    text-decoration: line-through #336699;
  }
}
</style>
