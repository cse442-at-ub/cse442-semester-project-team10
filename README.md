# Welcome to Our Project
To install and run our project here are the steps required:


To set up the development environment follow the getting started pages with react native.
https://facebook.github.io/react-native/docs/getting-started

#### This requires
- Node
- Java Development Kit
- Android development envirnment
  - Android Studio
  - Android SDK
- Watchman (recommended)

(on Ubuntu I get error code "ENOSPC" when running npx react-native start. this can be fixed running the following command)
>> echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


Once the dev envirnment is set up and configured correctly
