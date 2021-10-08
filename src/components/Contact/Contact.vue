<template>
  <div class="Contact">
    <div class="contact">
      <a class="contact__link" href="mailto:xuantu14112001@gmail.com">
        <b-icon class="contact__icon contact__icon--mail" icon="envelope-fill"></b-icon>
      </a>
      <a class="contact__link" href="tel:0345707835">
        <b-icon class="contact__icon contact__icon--phone" icon="telephone-fill"></b-icon>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
*{
  font-family: 'Open Sans', sans-serif;
}
.contact {
  position: fixed;
  width: 70px;
  height: 70px;
  top: auto;
  bottom: 140px;
  left: 70px;
  z-index: 1000;

  &__link {
    color: #FFF;
    display: block;
    padding: 10px; 
    border-radius: 50%;
    background-color: #ee4d2d;
    text-align: center;
    position: relative;
    z-index: 100;
    animation: ZoomIn 1s linear infinite;
    box-shadow: 5px 5px 10px #000;
    border: 1px solid #fff;

    &:last-child {
      margin-top: 20px;
    }

    &::before, &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #ee4d2d;
      border-radius: 50%;
      top: 0;
      left: 0;
      z-index: -1;
      transition: .3s;
    }
  }
  &__icon {
    width: 41px;
    height: 49px;
    
    &--mail {
      animation: ZoomIn 1.5s linear infinite;
    }

    &--phone {
      animation: fadeIn 0.5s linear infinite;
    }
  }
}

@media (min-width: 1025px) {
  .contact {
    &__link {
      
      &:hover.contact__link::after {
        transform: scale(2);
        opacity: 0;
      }

      &:hover.contact__link::before {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
}

@media (max-width: 450px) and (max-width: 767px){

  .contact {
    display: none;
  }
}
@keyframes ZoomIn {
  0% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.8);
  }
}

@keyframes fadeIn {
  0% {
    transform: rotate(-220deg);
  }

  100% {
    transform: rotate(-170deg);
  }
}
</style>
