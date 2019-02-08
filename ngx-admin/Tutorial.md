# Tutorial

## Docs

Install ngx-admin
http://akveo.github.io/ngx-admin/docs/getting-started/installation-guidelines

 ## Dev Tools 

NodeJS 10.15.1 

NVM: Node Version Manager - Simple bash script to manage multiple active node.js versions (Mac, Linux) https://github.com/creationix/nvm 

Suggested Editor: Visual Studio Code

Integrate Linter in VSCode: TSLint for Visual Studio Code  https://marketplace.visualstudio.com/items?itemName=eg2.tslint

## Dev Tips

Running Linter before pushing to github:

    npm run lint

## Running and Compiling


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

## Nebular: "Components, Auth & Security for your next Angular App"

Docs

https://akveo.github.io/nebular/
https://akveo.github.io/nebular/docs/guides/install-based-on-starter-kit#install-based-on-starter-kit

Components https://akveo.github.io/nebular/docs/components/components-overview

Card Component https://akveo.github.io/nebular/docs/components/card/overview#nbcardcomponent

Button Component https://akveo.github.io/nebular/docs/components/button/overview

## Themes

Switch Theme

    src/app/@theme/theme.module.ts

Available Icons  http://akveo.com/ngx-admin/pages/ui-features/icons


## Examples

Mimimal Component "Hello World"

    src/app/pages/test-dashboard


