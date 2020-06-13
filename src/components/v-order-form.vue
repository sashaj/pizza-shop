<template>
    <div class="v-order-form">
        <h1>Delivery Address </h1>
        <form class="v-order-form__form">
            <input type="text" placeholder="Street">
            <input type="number" placeholder="House number">
            <input type="number" placeholder="Flat number">
            <input type="number" placeholder="Section number">
            <input type="number" placeholder="Floor number">
            <textarea placeholder="Comments" name="" cols="30" rows="10"></textarea>
            <button class='v-order-form__submit'>Order</button>
        </form>
        
    </div>
</template>

<script>
export default {
  components: {
  },
  data: function() {
    return {
      title: "Main wrapper"
            };
        },
    };
</script>

<style lang="scss">
    .v-order-form__form{
        display: flex;
        flex-direction: column;
    }
    .v-order-form__form input, textarea{
        margin-bottom: 25px;
        padding-left: 15px;
        font-size: 15px;
        border: 1px solid #80807e;
    }
    .v-order-form__form input{
        height: 45px;
    }
    .v-order-form__form textarea{
        padding-top: 10px;
    }
    .v-order-form__submit{
        background: #00019f;
        color: white;
        height: 50px;
        border-radius: 2px;
    }

</style>