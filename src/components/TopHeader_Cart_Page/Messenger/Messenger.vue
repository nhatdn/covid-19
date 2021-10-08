<template>
  <div class="Messenger">
    <div class="messenger">
      <a
        class="messenger__link text-decoration-none" href="https://www.facebook.com/messages/t/100017479666355" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-messenger messenger__link--icon" viewBox="0 0 16 16">
          <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
        </svg> 
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Messenger",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
*{
  font-family: 'Open Sans', sans-serif;
}
.messenger {
  position: fixed;
  top: auto;
  bottom: 40px;
  left: auto;
  right: 40px;

  &__link {
    padding: 33px 14px;
    color: #fff;
    border-radius: 50%;
    background-color: #ee4d2d;
    transition: 0.3s;
    box-shadow: 5px 5px 10px #000;
    border: 1px solid #fff;
  }
}

@media (min-width: 1025px) {
  .messenger {
    &__link {
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
@media (max-width: 450px) and (max-width: 767px){

  .messenger {
    bottom: 100px;
    right: 20px;
    z-index: 1000;
    &__link {
      padding: 18px 9px;
      &--icon {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
