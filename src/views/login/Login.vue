<template>
    <div>
        <img src="../../assets/logo.png" alt="" class="">
        <button @click="login" class="login">登录</button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class HelloWorld extends Vue{
        public login(){
          localStorage.setItem('token','何致贤')
          const redirectPath: any = this.$route.query.redirect;
          if (this.$route.query.redirect){
              this.$router.push({path:redirectPath})
          }else {
              this.$router.push({path:'/'})
          }
        }
    }

</script>

<style lang="scss" scoped>
    .login{
        width: 702px;
        height: 100px;
        background-color: #ff6464;
        color: white;
    }
</style>
