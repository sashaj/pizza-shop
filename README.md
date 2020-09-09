# vue_shop
A protototype for an online store using Vue stack.


This project uses:

Front:
Scss, ES6, Vue.js, Vuex, Vue router.

Backend (just a bit):
Node.js, Express.js

Live:
https://allonzo-pizza.herokuapp.com/

### quick local deploy

Run the following commands:

1. yarn
2. yarn serve
3. node server.js

You would also need to change api requests link in 'src/actions/api-requests.js' to 'localhost:8080/...'
Look there form comments.

---

##Vue cli instructions

### Previewing Locally

The dist directory is meant to be served by an HTTP server (unless you've configured publicPath to be a relative value), so it will not work if you open dist/index.html directly over file:// protocol. The easiest way to preview your production build locally is using a Node.js static file server, for example serve:

npm install -g serve
serve -s dist

    -s flag means serve it in Single-Page Application mode
    which deals with the routing problem below

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
