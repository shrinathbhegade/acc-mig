/*global device, debugLog, $, Connection, cordova*/
var isDeviceOnline;
var focusMode = false;
var mobileApp = {
  // App Constructor
  initialize: function () {
    mobileApp.bindEvents();
  }, // bind events that are required on startup
  bindEvents: function () {
    document.addEventListener("deviceready", mobileApp.onDeviceReady, false);
  },
  onDeviceReady: function () {
    // removing splashscreen
    navigator.splashscreen.hide();
    document.addEventListener("resume", mobileApp.onResume, false);
    //checking device network status
    isDeviceOnline = mobileApp.isOnline();
    // intializing GA plugin
    window.analytics.startTrackerWithId(googleAnalyticsTrackingId);
    window.analytics.trackView("pageview");

    mobileApp.notify();
    // The event fires when an application goes online, and the device is connected to the Internet.
    document.addEventListener("online", mobileApp.ifDeviceOnline, false);
    // The event fires when an application goes off-line, and the device is not connected to the Internet.
    document.addEventListener("offline", mobileApp.ifDeviceOffline, false);
    document.addEventListener("resume", mobileApp.onResume, false);

    $("input, select").focus(function () {
      if (device.platform === "iOS") {
        focusMode = true;
        $($(".sticky-holder").get(0)).css({
          position: "static",
        });
      } else {
        return;
      }
    });
    $("input, select").blur(function () {
      if (device.platform === "iOS") {
        focusMode = false;
        $($(".sticky-holder").get(0)).css({
          position: "",
        });
        $($(".sticky-holder").get(0)).addClass("stuck");
      } else {
        return;
      }
    });
  },
  ifDeviceOnline: function () {
    // isDeviceOnline to true
    isDeviceOnline = true;
  },
  ifDeviceOffline: function () {
    // isDeviceOnline to false
    isDeviceOnline = false;
  }, // checking if device is online
  isOnline: function () {
    var networkState = navigator.connection.type;
    return (
      networkState !== Connection.UNKNOWN && networkState !== Connection.NONE
    );
  },
  onResume: function () {
    //checking device network status
    isDeviceOnline = mobileApp.isOnline();
    mobileApp.notify();
  },
  notify: function () {
    /*** getAppVersion gives VersionNumber, AppName, PackageName, VersionCode  ****/
    cordova.getAppVersion.getVersionNumber().then(function (version) {
      /*** device gives model, platform, uuid, version, manufacturer, isVirtual, serial ***/ if (
        device.platform === "Android"
      ) {
        notification.osType = notification.osTypes.Android;
      } else if (device.platform === "iOS") {
        notification.osType = notification.osTypes.iOS;
      }
      notification.appVersion = version;
      if (isDeviceOnline) {
        notification.callWebApi(
          "get",
          notification.criticalNotificationInputURL(),
          null,
          notification.notificationType.critical
        );
      } else {
        notification.CheckStoredNotification();
      }
      notification.callWebApi(
        "get",
        notification.nonCriticalNotificationInputURL(),
        null,
        notification.notificationType.nonCritical
      );
    });
  },
};
mobileApp.initialize();
