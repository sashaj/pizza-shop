<template>
  <div class="v-popup__wrapper" ref='popup__wrapper'>
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{modalTitle}}</span>
        <span><i class="material-icons close" @click="closePopup"></i></span>
      </div>
      <div class="v-popup__content">
        <slot> </slot>
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">close</button>
        <button class="submit_btn" @click='rightBtnAction'>{{rightBtnTitle}}</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'v-popup',
  props: {
    rightBtnTitle: {
      type: String,
      default: 'Ok'
    },
    modalTitle: {
      type: String,
      default: 'Ok'
    }
  },
  methods: {
    closePopup(){
      this.$emit('closePopup');
    },
    rightBtnAction(){
      this.$emit('rightBtnAction');
    }
  },
  mounted(){
    document.addEventListener('click', (item)=>{
      if (item.target === this.$refs.popup__wrapper){
        this.closePopup();
      }
    })
  
  }
};
</script>

<style lang="scss">
.v-popup__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(64,64,64, 0.4);
  z-index: 3;
  }
.v-popup {
  padding: 16px;
}
.v-popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.submit_btn {
  padding: 8px;
  color: white;
  background: green;
}
.close_modal {
  padding: 8px;
  color: white;
  background: red;
}
.v-popup {
  position: fixed;
  padding: 16px;
  top: 50px;
  width: 400px;
  box-shadow: 0 0 18px 0 #80807e;
  z-index: 3;
  background: #fff;
}
.material-icons.close {
  cursor: pointer;
}
</style>
