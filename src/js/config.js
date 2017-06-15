require.config({
    paths: {
        "jquery": "../lib/jquery-3.2.1",
        "common": "../lib/common",
        // jquery插件依赖jQuery
        'gdszoom': '../lib/jquery-gdszoom/jquery.gdszoom',
        'unslider': '../lib/unslider',
        'lanjiaz': '../lib/jquery.lazyload',
        'fly': '../lib/jquery.fly.min',
        'com': 'com',


    },
    shim: {
        // 给gdszoom添加依赖
        'gdszoom': ['jquery'],
        'unslider': ['jquery'],
        'lanjiaz': ['jquery'],
        'fly': ['jquery']



    }
})
