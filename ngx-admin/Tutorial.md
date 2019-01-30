# Tutorial

## Docs

Install ngx-admin
http://akveo.github.io/ngx-admin/docs/getting-started/installation-guidelines


## install


    nvm --version
    > 0.33.11

    nvm install 10.15.1
    nvm alias default  10.15.1

    git clone https://github.com/akveo/ngx-admin.git

    cd ngx-admin
    sudo rm -R node_modules 
    npm i

To run a local copy in development mode, execute:

    npm start

Go to http://0.0.0.0:4200 or http://localhost:4200 in your browser.    

To create a bundle in production mode, execute:

    npm run build:prod

This will clear up your dist folder (where release files are located) and generate a release build. Now you can copy the sources from the dist folder and use it with any backend framework or simply put it under a web server.

