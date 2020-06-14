<template>
  <div class="v-order-form">
    <h1>Delivery Information</h1>
    <div v-show="formErrors.length" class="v-order-form__errors-wrapper">
      <span>Please correct the following error(s):</span>
      <ul>
        <li :key="error.name" v-for="error in formErrors">{{ error }}</li>
      </ul>
    </div>
    <form class="v-order-form__form" ref="deliveryForm">
      <input
        v-model="phone"
        name="phone"
        type="tel"
        placeholder="Phone number"
      />
      <input v-model="street" name="street" type="text" placeholder="Street" />
      <input
        v-model="houseNumber"
        name="house number"
        type="number"
        placeholder="House number"
      />
      <input name="flat" type="number" placeholder="Flat number" />
      <input name="section" type="number" placeholder="Section number" />
      <input name="floor" type="number" placeholder="Floor number" />
      <textarea
        name="comments"
        placeholder="Comments"
        cols="30"
        rows="10"
      ></textarea>
      <button class="v-order-form__submit" @click="checkForm">Order</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      phone: null,
      street: null,
      houseNumber: null,
      formErrors: [],
    };
  },
  methods: {
    ...mapActions([
        "SEND_FORM"
    ]),
    checkForm(e) {
      e.preventDefault();
      if (this.phone && this.houseNumber && this.street){
        const form = this.$refs.deliveryForm
        const fd = new FormData(form);
        this.SEND_FORM(fd);
      } else{
          this.formErrors = [];
          if (!this.phone) this.formErrors.push("*Phone is required.");
          if (!this.houseNumber) this.formErrors.push("*House number is required.");
          if (!this.street) this.formErrors.push("*Street is required.");
      }
    },
 
  },
  computed: {
    ...mapGetters([
      "ISFORMSUBMITTED"
    ])
  }
};
</script>

<style lang="scss">
.v-order-form__form {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}
.v-order-form__form input,
textarea {
  margin-bottom: 25px;
  padding-left: 15px;
  font-size: 15px;
  border: 1px solid #80807e;
}
.v-order-form__form input {
  height: 45px;
}
.v-order-form__form textarea {
  padding-top: 10px;
}
.v-order-form__submit {
  background: #00019f;
  color: white;
  height: 50px;
  border-radius: 2px;
}
.v-order-form__errors-wrapper {
  text-align: left;
  margin-bottom: 30px;
}
.v-order-form__errors-wrapper span {
  margin-bottom: 10px;
  display: block;
}
</style>
