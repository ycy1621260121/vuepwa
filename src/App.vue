<template>
  <div id="app">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>


<style lang="scss">
    @font-face {
      font-family: 'iconfont';  /* project id 1863584 */
      src: url('//at.alicdn.com/t/font_1863584_0kah5y69kk8g.eot');
      src: url('//at.alicdn.com/t/font_1863584_0kah5y69kk8g.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_1863584_0kah5y69kk8g.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_1863584_0kah5y69kk8g.woff') format('woff'),
      url('//at.alicdn.com/t/font_1863584_0kah5y69kk8g.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_1863584_0kah5y69kk8g.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 48px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
<style lang="css">
    @import "./style/scss/css/index.css";
    @import "./style/base/css/common.css";
</style>
