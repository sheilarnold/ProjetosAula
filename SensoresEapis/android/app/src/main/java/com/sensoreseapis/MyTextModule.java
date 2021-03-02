package com.sensoresEapis;
//Importações necessáris para a ponte entre o ReactNative e o código nativo
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
//fim

public class MyTextModule extends ReactContextBaseJavaModule{
    public MyTextModule(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName(){
        return "MeuTexto";
    }

    @ReactMethod
    public void show(String message, Callback Callback){
        Callback.invoke("Mensagem do Android: " + message);
    }
}
