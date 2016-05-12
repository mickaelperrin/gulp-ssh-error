# gulp-ssh problem

>  gulp -ssh does not seem to call callback when called in another folder

## Installation

1. Clone this repo
2. Run `npm install` in src folder
3. Run `npm install` in gulp folder
4. Add a test-settings.js file in the gulp/ssh folder with the settings to connect to your test server. For example:

```javascript
module.exports = function(gulp) {
 return { 
    host: 'server_name',
    username: 'user_name',
    agent: process.env.SSH_AUTH_SOCK,
    gulp: gulp
 }
};
```

## Run test case

### Test 1 OK

Go to folder gulp and run `gulp`. 

> [12:43:12] Using gulpfile ~/tmp/test-ssh/gulp/gulpfile.js
> [12:43:12] Starting 'default'...
> [12:43:12] gulp-ssh :: Connect...
> [12:43:13] gulp-ssh :: Ready
> [12:43:13] gulp-ssh :: Executing :: echo ok
> ok
>
> [12:43:13] Finished 'default' after 598 ms
> [12:43:13] gulp-ssh :: End
> [12:43:13] gulp-ssh :: Close

### Test 2 KO

Go to folder src and run `gulp`.

> [12:44:40] Using gulpfile ~/tmp/test-ssh/src/gulpfile.js
> [12:44:40] Starting 'default'...
> [12:44:40] gulp-ssh :: Connect...
> [12:44:41] gulp-ssh :: Ready
> [12:44:41] gulp-ssh :: Executing :: echo ok
> ok
>
> [12:44:41] Finished 'default' after 569 ms

**gulp-ssh does not end.**

## Use case

All my project use this folder structure:

- gulp : shared gulp tasks across project, typically a git submodule
- src: the source code of my project

This approach helps me a lot to share common tasks across projects and avoid lot of code duplication.