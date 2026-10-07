---
title: "Cordova options"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/cordova-options"
release: 495.2
---

`[Paid plans only]`  The **Cordova options** dialog is used to change settings for an **Android** or **iOS** export, both of which are built with Cordova.

For more information, also refer to the tutorial [How to publish mobile apps](https://www.construct.net/en/tutorials/how-to-publish-mobile-apps-26).

[![The Cordova options dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/115439/cordova-android-options_v500.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/115439/cordova-android-options.png)The Cordova options dialog

The dialog shown is for an Android export, but the appearance is similar for an iOS export. The following options are available.

**Min. version**  
Choose the minimum Android or iOS version that the app will support. A lower minimum version will make your app available on a greater number of devices on the market. On the other hand a higher minimum version ensures your app runs on more modern systems with better features and performance, and often correlates with higher-spec hardware.

**Target version**  
(Android exports only) This field displays the *Target API level* that Construct has configured for your app, displayed as both the Android API level and the corresponding Android version number. This is different to the minimum version and is set by Construct so is not changeable. It is usually updated annually when the Google Play publishing requirements specify a new required target API level. If you need an updated target API level, make sure you are using the latest version of Construct, or check the latest beta release.

**Android build**  
(Android exports only) Choose what to export. For more details see the tutorial [How to publish mobile apps](https://www.construct.net/en/tutorials/how-to-publish-mobile-apps-26).

- **Cordova project:** export a Cordova project which can be built locally with the Cordova CLI, or used with a different build service.
- **Android Studio project:** use Cordova to generate an Android Studio project, which can then be opened in Android Studio for customisation, testing and completing an Android build.
- **Debug APK:** build a test Android application (APK) via the Scirra Mobile App Build Service. Debug APKs are intended for testing only. Normally to install a debug APK on an Android device requires adjusting the system settings to enable a special developer mode. Debug APKs cannot be published to the Google Play Store.
- **Unsigned release APK:** build a release Android application (APK) via the Scirra Mobile App Build Service. Release APKs are intended for publishing to the Google Play store and must first be signed before they can be published. Additionally you cannot normally install a release APK to a device unless it comes from the Google Play store. If you simply wish to test your app without publishing it, use a Debug APK instead.
- **Unsigned Android App Bundle:** build a release Android application, in the new Android App Bundle (ABB) format, via the Scirra Mobile Build Service. ABBs are intended for publishing to the Google Play store and must first be signed before they can be published. An ABB file cannot be directly installed onto a device. You should not use these for local testing
- **Signed Debug APK:** build and sign a test Android application (APK) via the Scirra Mobile App Build Service. While signing a debug APK is not required to install it onto a device, some services require that you sign the APK with your publishing certificate before you can test them ( such as Google Play Games ). Under most situations you will be fine to use an Unsigned Debug APK.
- **Signed Release APK:** build and sign a release Android application (APK) via the Scirra Mobile Build Service. This is intended for publishing to the Google Play store, it is already signed so can be uploaded directly to the store.
- **Signed Android App Bundle:** build and signed a release Android application, in the new Android App Bundle (ABB) format, via the Scirra Mobile Build Service. This is intended for publishing to the Google Play store, it is already signed so can be uploaded directly to the store. An ABB file cannot be directly installed onto a device.

**URL whitelist**  
A space separated list of URLs that the app can ask the system to open. The default option `http://*/* https://*/*` allows the application to open any http or https URL.

**Android Version Code**  
(Android exports only) Specify a Android version code for this export. The initial value is automatically calculated from the project's version number.

**iOS build**  
(iOS exports only) Choose what to export. For more details see the tutorial [How to publish mobile apps](https://www.construct.net/en/tutorials/how-to-publish-mobile-apps-26).

- **Cordova project:** export a Cordova project which can be built locally with the Cordova CLI, or used with a different build service.
- **Xcode project:** use Cordova to generate an Xcode project, which can then be opened in Xcode on a Mac for customisation, testing and completing an iOS build.

**Hide status bar**  
When the app is running, hide the system status bar if possible. This allows the app to use up more space on the screen.

**Require Vibrate permission**  
Enable if your app makes use of vibrating the device to ensure the app has permission to do this.

**Require Camera permission**  
Enable if your app makes use of camera input via the User Media object to ensure the app has permission to access this.

**Require Microphone permission**  
Enable if your app makes use of microphone input via the User Media object to ensure the app has permission to access this.

**Choose Keystore**  
(Signed Android builds only) Choose a keystore from the filesystem, or create a new one, for use in signing the build.

**Create Keystore**  
(Signed Android builds only) Choose a keystore from the filesystem, or create a new one, for use in signing the build.

**Key Name**  
(Signed Android builds only) The name of the key within the keystore you wish to use for signing the build. This is referred to as the "alias" by the create keystore dialog.

**Key Store password**  
(Signed Android builds only) The password for the keystore you have selected.

**Key password**  
(Signed Android builds only) The password for the key you have chosen in the keystore.
