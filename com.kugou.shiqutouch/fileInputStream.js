//java.io.FileInputStream:_
function loadDexfile(dexfile) {
    Java.perform(function() {
          Java.openClassFile(dexfile).load();
          console.log("load " + dexfile);
    });
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            console.log("load " + dexfile);
        }
    });
};

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

function getClassName(obj) {
    if (obj.getClass) {
        return obj.getClass().getName();
    }
    var javaObject = Java.use("java.lang.Object");
    return Java.cast(obj, javaObject).getClass().getName();
}

//str1是否包含str2，str2可用正则表示
function contains(str1, str2) {
    var reg = RegExp(eval("/"+str2+"/"));
    if(str1 && str1.match && str1.match(reg)){
        return true;
    }else{
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
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id,name):(" + currentThread.getId() +"," + currentThread.getName() + "),timestamp:" + startTime+"---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
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
    while(new Date().getTime() < startTime) {}
};


function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/com.kugou.shiqutouch/xinit/'+dexfile);
};

Java.perform(function() {
    var java_io_FileInputStream_clz = Java.use('java.io.FileInputStream');
    var java_io_FileInputStream_clz_init_25ic = java_io_FileInputStream_clz.$init.overload('java.io.File');
    java_io_FileInputStream_clz_init_25ic.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = java_io_FileInputStream_clz_init_25ic.call(this, v0);
        log(v0);
        methodInBeat(invokeId, startTime, 'public java.io.FileInputStream(java.io.File) throws java.io.FileNotFoundException', executor);
        return obj;
    };
    var java_io_FileInputStream_clz_init_bvib = java_io_FileInputStream_clz.$init.overload('java.io.FileDescriptor');
    java_io_FileInputStream_clz_init_bvib.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = java_io_FileInputStream_clz_init_bvib.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.io.FileInputStream(java.io.FileDescriptor)', executor);
        return obj;
    };
    var java_io_FileInputStream_clz_init_d3an = java_io_FileInputStream_clz.$init.overload('java.io.FileDescriptor', 'boolean');
    java_io_FileInputStream_clz_init_d3an.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = java_io_FileInputStream_clz_init_d3an.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public java.io.FileInputStream(java.io.FileDescriptor,boolean)', executor);
        return obj;
    };
    var java_io_FileInputStream_clz_init_m7a4 = java_io_FileInputStream_clz.$init.overload('java.lang.String');
    java_io_FileInputStream_clz_init_m7a4.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = java_io_FileInputStream_clz_init_m7a4.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.io.FileInputStream(java.lang.String) throws java.io.FileNotFoundException', executor);
        return obj;
    };
});