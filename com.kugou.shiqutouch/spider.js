//com.jifen.qukan.utils.http.i:?
function classExists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            console.log("load " + dexfile);
        }
    });
};

//str1是否包含str2，str2可用正则表示
function contains(str1, str2) {
    var reg = RegExp(eval("/" + str2 + "/"));
    if (str1 && str1.match && str1.match(reg)) {
        return true;
    } else {
        return false;
    }
};

//创建ArrayList对象用这个方法就好了
function newArrayList() {
    var ArrayListClz = Java.use('java.util.ArrayList');
    return ArrayListClz.$new();
}

//创建HashSet对象用这个方法就好了
function newHashSet() {
    var HashSetClz = Java.use('java.util.HashSet');
    return HashSetClz.$new();
}

//创建HashMap对象用这个方法就好了
function newHashMap() {
    var HashMapClz = Java.use('java.util.HashMap');
    return HashMapClz.$new();
}

function methodInBeat(invokeId, timestamp, methodName, executor) {
    var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------start:" + invokeId + ",objectHash:" + executor + ",thread:" + threadClz.currentThread().getId() + ",timestamp:" + startTime + "---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------end:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) + "---------------\n");
};

function log(str) {
    console.log(str);
};

function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {}
};

checkLoadDex('gz.ffradar.SearchMocker', "/data/user/0/com.kugou.shiqutouch/xinit/spider.dex");

function startRestServer() {
    Java.perform(function() {
        var SearchMockerClz = Java.use('gz.ffradar.SearchMocker');
        SearchMockerClz.startRestServer();
    });
}

function stopRestServer() {
    Java.perform(function() {
        var SearchMockerClz = Java.use('gz.ffradar.SearchMocker');
        SearchMockerClz.stopRestServer();
    });
}

function recognize(path) {
    // Java.perform(function() {
    //     var SearchMockerClz = Java.use('gz.ffradar.SearchMocker');
    //     var ret = SearchMockerClz.recognize(path);
    //     log(ret);
    // });
}

Java.perform(function() {
    var android_os_Process_clz = Java.use('android.os.Process');
    var android_os_Process_clz_method_killProcess_2tot = android_os_Process_clz.killProcess.overload('int');
    android_os_Process_clz_method_killProcess_2tot.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        //android_os_Process_clz_method_killProcess_2tot.call(android_os_Process_clz, v0);
        methodInBeat(invokeId, startTime, 'public static final void android.os.Process.killProcess(int)', executor);
    };
});

startRestServer()

rpc.exports = {
    log: function(str) {
        console.log(str);
    },
};

