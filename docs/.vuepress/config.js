module.exports = {
    title: '欢迎光临',
    description: '你好, 我的朋友!',
    themeConfig: {
        //头部导航
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'English', link: '/language/english' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebarDepth: 2,
        //侧边栏
        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: ['/guide/']
            }
        ],
        lastUpdated: 'Last Updated',
    },
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}