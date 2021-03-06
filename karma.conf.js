//karma配置文件
module.exports = function (config) {
    config.set({
        //基础路径：表示karma从哪个位置开始找文件
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use  环境默认引入
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai'],
        client: {
            chai: {
                includeStack: true
            }
        },
        //测试的入口文件
        //   /**/*  运行dist目录下的所有文件,包括嵌套文件
        // list of files / patterns to load in the browser
        files: [
            'dist/**/*.test.js',
            'dist/**/*.test.css'
        ],
        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},
        
        //测试结果报文输出格式
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging 输出的日志级别
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}