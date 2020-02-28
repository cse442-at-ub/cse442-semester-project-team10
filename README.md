# Welcome to Our Project
To install and run our project here are the steps required:

Follow this documentation to add the required software and configurations required for our project
https://facebook.github.io/react-native/docs/getting-started

### Required Software
- Node
- Java Development Kit
- Android development envirnment
  - Android Studio
  - Android SDK
- Watchman (recommended)

These softwares take a considerable amount of time to download and configure.


On Ubuntu I get error code "ENOSPC" when running npx react-native start. This can be fixed by opening a terminal and running:
``` shell session
$ echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
fs.inotify.max_user_watches=582222
fs.inotify.max_user_watches = 582222
``` 

### Start The Application
- clone or download the code
- Start an Android 9 emulator from android studios
- Open the terminal and run in directory titled project:
  ``` shell session
  $ cd /path/to/git/repo/project/
  $ npm install or yarn install
  $ npx react-native run-android
  ```

If the following command does not load the application
  ```
  $ npx react-native run-android
  ```
Try
  ```
  $ npx react-native start
  $ npx react-native run-android
  ```

How to fix the permission denied android studios emulator error 
https://blog.chirathr.com/android/ubuntu/2018/08/13/fix-avd-error-ubuntu-18-04/

The app should now appear on your emulator.
