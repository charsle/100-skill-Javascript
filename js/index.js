/**
 * 原生JavaScript实现字符串长度截取
 * @param  {[type]} start [字符串]
 * @param  {[type]} end   [长度]
 * @return {[type]}       [description]
 */
function cutStr(str, len) {
    var temp = '',
        count = 0,
        strReg = /[^\x00-\xff]/,
        strre = '';
    for (var i = 0, len1 = str.length; i < len1; i++) {
        if (count < len) {
            temp = str.substr(i, 1);
            if (strReg.exec(temp) == null) {
                count++;
            } else {
                count = count + 2;
            }
            strre += temp;
        } else {
            break;
        }
    }
    return strre;
}

/**
 * 原生JavaScript获取域名主机
 * @param  {[type]} url [路径]
 * @return {[type]}     [description]
 */
function getHosts(url) {
    var host = null;
    var regex = /^\w+\:\/\/([^\/]*).*/;
    var match = '';
    if (typeof url == undefined || null == url) {
        console.error('请输入路径');
        return;
        // try {
        //     url = window.location.href;
        // } catch (e) {
        //     throw '请输入路径'
        //     console.error(e);
        // }
    } else {
        match = url.match(regex);
    }
    if (typeof match != undefined && null != match) {
        host = match[1];
    }
    return host;
}
/**
 * JavaScript判断是否为数字类型
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function isDigit(value) {
    var patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}
/**
 * 设置cookie
 * @param {[type]} name  [名称]
 * @param {[type]} value [值]
 */
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
/**
 * 获取cookie
 * @param  {[type]} name [名称]
 * @return {[type]}      [description]
 */
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
/**
 * 删除cookie
 * @param  {[type]} name [名称]
 * @return {[type]}      [description]
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
/**
 * 文件大小转换
 * @param  {[type]} bytes [字节数]
 * @return {[type]}       [description]
 */
function formatSize(bytes) {
    if (bytes === 0) return '0 B';
    var k = 1000, // or 1024
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    var fileSize = (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    return fileSize;
}
/**
 * 判断文件类型是否是图片
 * @param  {[type]} fileType [description]
 * @return {[type]}          [description]
 */
function ifImg(fileType) {
    var flag = false;
    var imgType = ["PNG", "BMP", "JPEG", "JPG", "GIF", "AI", "HDRI", "RAW", "PCX", "TIFF", "TGA", "EXIF", "FPX", "SVG", "PSD", "CDR", "PCD", "DXF", "UFO", "EPS"];
    if (!("" == fileType || undefined == fileType)) {
        for (var i in imgType) {
            if (imgType[i] == fileType.toUpperCase()) {
                flag = true;
                break;
            }
        }
    }
    return flag;
}
/**
 * 随机生成32位uuid
 * @param {[type]} len   [description]
 * @param {[type]} radix [description]
 */
function UUId(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        var r;

        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}
/**
 * 动态加载样式文件
 * @param {[type]} url [路径]
 */
function LoadStyle(url) {
    try {
        document.createStyleSheet(url)
    } catch (e) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(cssLink)
    }
}
/**
 * avaScript返回浏览器版本内容
 * @param  {[type]} types [description]
 * @return {[type]}       [description]
 */
function browserVersion(types) {
    var other = 1;
    for (i in types) {
        var v = types[i] ? types[i] : i;
        if (USERAGENT.indexOf(v) != -1) {
            var re = new RegExp(v + '(\\/|\\s)([\\d\\.]+)', 'ig');
            var matches = re.exec(USERAGENT);
            var ver = matches != null ? matches[2] : 0;
            other = ver !== 0 && v != 'mozilla' ? 0 : other;
        } else {
            var ver = 0;
        }
        eval('BROWSER.' + i + '= ver');
    }
    BROWSER.other = other;
}
/**
 * JavaScript光标停在文字的后面，文本框获得焦点时调用
 * @return {[type]} [description]
 */
function focusLast() {
    var e = event.srcElement;
    var r = e.createTextRange();
    r.moveStart('character', e.value.length);
    r.collapse(true);
    r.select();
}
/**
 * JavaScript格式化CSS样式代码
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
function formatCss(s) { //格式化代码
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/;\s*;/g, ";"); //清除连续分号
    s = s.replace(/\,[\s\.\#\d]*{/g, "{");
    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
    return s;
}
/**
 * JavaScript压缩CSS样式代码
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
function yasuoCss(s) { //压缩代码
    s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
    s = s.replace(/;\s*;/g, ";"); //清除连续分号
    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
    return (s == null) ? "" : s[1];
}
/**
 * JavaScript整型解析为IP地址
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
function _int2iP(num) {
    var str;
    var tt = new Array();
    tt[0] = (num >>> 24) >>> 0;
    tt[1] = ((num << 8) >>> 24) >>> 0;
    tt[2] = (num << 16) >>> 24;
    tt[3] = (num << 24) >>> 24;
    str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);
    return str;
}
/**
 * JavaScript获取移动设备屏幕宽度
 * @return {[type]} [description]
 */
function getScreenWidth() {
    var smallerSide = Math.min(screen.width, screen.height);
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment && (fixViewPortsExperiment.toLowerCase() === "new");
    if (fixViewPortsExperiment) {
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            smallerSide = smallerSide / window.devicePixelRatio;
        }
    }
    return smallerSide;
}

/**
 * JavaScript时间个性化输出功能
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
function timeFormat(time) {
    var date = new Date(time),
        curDate = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        curYear = curDate.getFullYear(),
        curHour = curDate.getHours(),
        timeStr;

    if (year < curYear) {
        timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
    } else {
        var pastTime = curDate - date,
            pastH = pastTime / 3600000;

        if (pastH > curHour) {
            timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
        } else if (pastH >= 1) {
            timeStr = '今天 ' + hour + ':' + minute + '分';
        } else {
            var pastM = curDate.getMinutes() - minute;
            if (pastM > 1) {
                timeStr = pastM + '分钟前';
            } else {
                timeStr = '刚刚';
            }
        }
    }
    return timeStr;
}
