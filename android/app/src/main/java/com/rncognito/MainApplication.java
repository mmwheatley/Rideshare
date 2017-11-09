package com.rncognito;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD:android/app/src/main/java/com/rncognito/MainApplication.java
||||||| 5463add1... Initial Skeleton
import com.airbnb.android.react.maps.MapsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.oblador.vectoricons.VectorIconsPackage;
=======
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.oblador.vectoricons.VectorIconsPackage;
>>>>>>> parent of 5463add1... Initial Skeleton:android/app/src/main/java/com/rideshare/MainApplication.java
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
<<<<<<< HEAD:android/app/src/main/java/com/rncognito/MainApplication.java
          new MainReactPackage()
||||||| 5463add1... Initial Skeleton
          new MainReactPackage(),
            new MapsPackage(),
            new ReactNativeConfigPackage(),
            new ReactNativeI18n(),
            new VectorIconsPackage()
=======
          new MainReactPackage(),
            new ReactNativeI18n(),
            new VectorIconsPackage()
>>>>>>> parent of 5463add1... Initial Skeleton:android/app/src/main/java/com/rideshare/MainApplication.java
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
