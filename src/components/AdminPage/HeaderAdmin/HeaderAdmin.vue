<template>
  <div class="HeaderAdmin">
    <div class="header">
      <div class="header__text d-flex align-items-center">
        <b-icon class="header__text--icon" icon="list-ul"></b-icon>
        <span class="header__text--text">Dashboard</span>
      </div>
      <div
        class="header__search d-flex justify-content-center align-items-center"
      >
        <input
          class="header__search--input form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <label for="header__search--label search-bar"></label>
        <button
          @click="clickEvent = !clickEvent"
          class="header__search--icon-container"
        >
          <b-icon icon="search" id="search-bar"></b-icon>
        </button>
      </div>
      <div
        class="header__icons d-flex align-items-center justify-content-evenly"
      >
        <span class="header__icons--container"
          ><b-icon class="header__icons--icon" icon="chat-text"></b-icon
        ></span>
        <span class="header__icons--container"
          ><b-icon class="header__icons--icon" icon="bell"></b-icon
        ></span>
        <span class="header__icons--container"
          ><b-icon class="header__icons--icon" icon="person-circle"></b-icon
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderAdmin",
  data: function () {
    return {
      clicked: 0,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./HeaderAdmin"
</style>
