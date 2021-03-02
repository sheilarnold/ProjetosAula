package com.sensoreseapis;

//Importações necessárias
import com.facebook.react.bridge.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
//Fim

//Instanciamento do módulo
public class MyTextPackage implements ReactPackage{
    @Override
    public List<NativeModule> creactNativeModules(ReactApplicationContext reactContext){
        List<NativeModule> modules = new ArrayList<>();
        //modules.add(new MyTextModule(reactContext));
        return modules;
    }

    @Overide
    public List<ViewManager> createViewManagers(ReactApplicationContext reaactContext){
        return Collections.emptyList();
    }
}