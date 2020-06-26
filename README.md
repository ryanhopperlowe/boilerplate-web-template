# boilerplate-web-template

This template is designed to allow web-development to jump straight into learning the basics without the 
intimidation that comes with setting up a development environment

## Dependencies (Have these already installed on your computer)
- node.js
- npm
- git

 
## How to Use this Template

### `npm run start`

- Run this command from your terminal at the project root directory to start the server
- http://localhost:3000 will be used by default (can be overridden using environment variables)
- Upon saving any file inside of the `public/` directory, nodemon will reinstantiate the server as well as refresh the browser
so you can see your changes immediately
  - **NOTE**: nodemon is configured by default to only watch for changes on files with `.js`, `.html`, and `.css` file extentions
  - Extensions can be added/removed in `package.json` by editing the `start` script value in the `scripts` field:
    ```js
    "scripts": {
      "start": "nodemon --watch public -e js,html,css,{my,file,exts}",
      ...
    },
    ```
  - Once the server is running, you can stop it at any time by typing Control + C `^c` in your terminal
  

  ### Adding your own files and logic

  I've left things pretty open-ended for you as far as adding your own code. You're pretty much free to add as many new files/folders for your styling and logic as you please. However, a couple of things to note:

  - If you do decide to add new files and folders to the template, make sure you add them to the `public` directory.
    - The reason for this is because nodemon is configured to only send files/folders located in the `public` directory to the browser.
    Therefore, any resource left outside of the `public` folder will not be accessible in the browser.