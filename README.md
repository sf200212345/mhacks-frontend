# mhacks frontend

Using React Native with Expo.

## Setup

Replicate the development environment using `npm install` on a cli.

-   Make sure to install/update nodejs and npm globally first, or the command line will probably give you errors
-   You can verify if you have these installed globally with `nodejs --version` and `npm --version`
-   Using nodejs 12.22.9 and npm 9.6.7

`npm install` should locate the package.json file and install all necessary dependencies automatically.

-   See more here: https://stackoverflow.com/questions/8367031/how-do-i-install-package-json-dependencies-in-the-current-directory-using-npm

We're using Expo to handle distribution, you can develop with Expo by using `npx expo start --tunnel` and use the Expo Go app on your phone to scan the QR code that opens

-   Your phone must be on the same network that your computer is on
-   I specified the `--tunnel` option when starting the local dev server because the default didn't work for me, but it might for you

This should render the app on your phone, as if you downloaded the app itself. You can also use any mobile emulators to develop directly on your computer.

-   iOS: https://docs.expo.dev/workflow/ios-simulator/
-   Android: https://docs.expo.dev/workflow/android-studio-emulator/

Please verify that you can see the initial app rendered on your phone (this is defined in App.tsx) to make sure that your local environment is set up correctly.

Finally, make sure you use VS Code and download the Prettier extension to get the automatic code formatting on saves and pastes.

## File Overview

The main files we will be working with is anything inside of app. To create a new route (page with url like http://prefix/[new page name]), either create a new .js file named the url suffix you want, or create a folder named the url suffix you want with an index.js file.

Put static assets in the assets folder.

### Don't change the following (for now):

#### assets/ and app.json

This is used to tell expo which static assets (defined in assets/) it should bundle with your app. This should be where images go if they need to be bundled with your app (e.g. logos, thumbnails). I
believe this will be bundled with your app when it is distributed on the App Store or Google Play.

#### App.js

This is the entry point defined in node_modules/expo/AppEntry.js, so don't change the name. This file will probably contain all the major screen components that we define, as well as any navigation
semantics.

#### babel.config.js, package-lock.json, package.json

A bunch of config files, we probably don't have to touch them at all.

## Coding and Style Recommendations
### File and Directory
- all components should be stored under src
    - each compoment should have its own file