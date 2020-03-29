# Simple Corona Ionic App(nothing fancy)

### 25/03/2020

## By **[Brian Sunday](https://github.com/Sundaybrian/simple-ionic-corona-app)**

## Description

This is a simple ionic app that renders covid-19 stats using this [https://rapidapi.com/astsiatsko/api/coronavirus-monitor/endpoints](https://rapidapi.com/astsiatsko/api/coronavirus-monitor/endpoints).Nothing too fancy,just rendering the cases as reported in the various countries

## Setup/Installation Requirements

- `git clone` [simple-ionic-corona-app](https://github.com/Sundaybrian/simple-ionic-corona-app)
- `cd simple-ionic-corona-app`
- install [nodejs](https://nodejs.org/en/)
- install cordova `npm install -g cordova` to read more on [apache cordova](https://cordova.apache.org/)
- install ionic `npm install -g @ionic/cli`
- install [android studio](https://medium.com/better-programming/install-android-studio-in-ubuntu-b8aed675849f) or look it up from the official android website
- `npm install` to install all dependencies
- install [java and gradle](https://sdkman.io/usage) if using linux system,windows users it is pretty straight forward
- First build will require usage of android studio but the consequent builds can be done from the terminal in vs code [importing cordova project to android studio and setting up gradle](https://cordova.apache.org/docs/en/dev/guide/platforms/android/index.html)
- The app can also be built from android studio once you install an emulator
- `ionic cordova run android --device` to run the application on your device connected via usb..ensure usb debugging is turned on.This is assumed the initial build has been done in android studio,then you can close it and build from your favourite editor
- `ionic cordova build android` to build the apk, the previous command also builds the apk
- Once your local build is complete the apk will be in the following location `platforms/android/app/build/outputs/apk/debug`.I have included a folder name `covidapk` so you can download my latest build

## Known Bugs

While building the apk you might run to this issues `Could not find plugin "proposal-numeric-separator".`just follow this [https://www.reddit.com/r/angular/comments/flymj5/build_failing_please_help/](https://www.reddit.com/r/angular/comments/flymj5/build_failing_please_help/)

## Technologies Used

- Ionic
- Apache Cordova

### License

MIT (c) 2020 **[Brian Sunday](https://github.com/Sundaybrian/simple-ionic-corona-app)**
