# GUESS NUMBER

A simple number guessing game built with nodejs using express framework and pug as template engine. This project was created as part of learning full stack development using nodejs

## Steps followed in creating this project

* After installing [nodejs](https://nodejs.org/en/) using [nvm](https://github.com/nvm-sh/nvm)

* Install express-generator for creating folder structure

    ```bash
    npm install -g express-generator
    ```

* Set view engine as pug instead of default jade

    ```bash
    express --view=pug guess_number
    ```

* Switch to `guess_number` diretory created

* Remove `jade` from package.json file which was added by express-generator (This will change in future version and won't be required to edit manually) and `pug` latest version as dependency

* Install dependencies

    ```bash
    npm install
    ```

* Fix any package vulnerabilties reported using `npm audit` or `npm audit fix`

* Verify installation and configs
  
  ```bash
  npm start
  ```

* Add code required and restart app
