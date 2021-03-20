//crack by com.smile.gifmaker 7.5.50.14809
//okhttp3.FormBody$a
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
    var str = ("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------\n");
    str += methodName + "\n";
    str += stackInfo.substring(20);
    str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
	console.log(str);
};

function log(str) {
    console.log(str);
};

//虽然我们习惯用fastjson一行将对象转成json字符串，但是Android Library里面自带了一个gson可以做到 只是sdk没有暴露出来，很多人不知道。在frida中所有代码都是透明的，你随便调......
function toJson(javaObject) {
    var gsonClz = Java.use("com.google.gson.Gson");
    var toJsonMethod = gsonClz.toJson.overload("java.lang.Object");
    return toJsonMethod.call(gsonClz.$new(),javaObject);
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
    loadDexfile('/data/user/0/com.smile.gifmaker/xinit/'+dexfile);
};


//okhttp3.FormBody$a
Java.perform(function() {
    var okhttp3_FormBody_a_clz = Java.use('okhttp3.FormBody$a');
    var okhttp3_FormBody_a_clz_method_a_06ag = okhttp3_FormBody_a_clz.a.overload();
    okhttp3_FormBody_a_clz_method_a_06ag.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = okhttp3_FormBody_a_clz_method_a_06ag.call(this);
        //methodInBeat(invokeId, startTime, 'public okhttp3.FormBody okhttp3.FormBody$a.a()', executor);
        return ret;
    };
    var okhttp3_FormBody_a_clz_method_b_5zds = okhttp3_FormBody_a_clz.b.overload('java.lang.String', 'java.lang.String');
    okhttp3_FormBody_a_clz_method_b_5zds.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = okhttp3_FormBody_a_clz_method_b_5zds.call(this, v0, v1);
        console.log("1name = " + v0 + ", value = " + v1);
        //methodInBeat(invokeId, startTime, 'public okhttp3.FormBody$a okhttp3.FormBody$a.b(java.lang.String,java.lang.String)', executor);
        return ret;
    };
    var okhttp3_FormBody_a_clz_method_a_bvca = okhttp3_FormBody_a_clz.a.overload('java.lang.String', 'java.lang.String');
    okhttp3_FormBody_a_clz_method_a_bvca.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = okhttp3_FormBody_a_clz_method_a_bvca.call(this, v0, v1);
        console.log("2name = " + v0 + ", value = " + v1);
        methodInBeat(invokeId, startTime, 'public okhttp3.FormBody$a okhttp3.FormBody$a.a(java.lang.String,java.lang.String)', executor);
        return ret;
    };
});