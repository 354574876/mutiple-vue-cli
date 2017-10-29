(function(){
    const cdn  = '';
    const host = window.location.host;

    // 将axios挂载到Vue 原型链上，每个实例都可以使用
    Vue.prototype.$ajax   = axios;
    Vue.prototype.cdn     = cdn;

    /**
     * axios 默认配置 已经请求错误拦截
     * baseURL：默认路径
     * timeout：请求延迟
     * withCredentials：跨域请求浏览器写入cookie
     */
    axios.defaults.baseURL = '';
    axios.defaults.timeout = 5000
    axios.defaults.withCredentials = true
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.interceptors.request.use(config => {
        // 参数格式化
        config.data = config.data ? stringify(config.data) : undefined;
        return config
    }, error => {
        console.log('加载超时' + error)
    })
    // http响应拦截器
    axios.interceptors.response.use(data => {
        // '请求成功：开始处理'
        return data.data
    }, error => {
        console.log('加载失败：' + error)
        return false;
    })

    /**
     * 序列化 POST 参数 {name:1, age:2} => 'name=1&age=2'
     * @param  {[Object]} obj 需要序列化对象
     * @return {[String]}     序列化后的参数
     */
    function stringify (obj) {
        return obj ? Object.keys(obj).sort().map(function (key) {
            var val = obj[key];
            // 如果值是object ，转化成字符串
            if (typeof val === 'object') {
                return key + '=' + JSON.stringify(val);
            } else {
                return key + '=' + val;
            }
        }).filter(function (x) {
            return x.length > 0;
        }).join('&') : '';
    }
})();