module.exports = {
    // 页头
    title: '胡凌寒的博客',
    // meta 描述
    description: '胡凌寒的博客',
    // base 路径，基于 gitHubPage: .io/blog/ 二级目录
    base: '/blog/',
    // 标签
    head: [
        ['link', {rel: 'shortcut icon', href: '/logo.png'}]
    ],
    // 导航栏配置
    themeConfig: {
        logo: '/logo.png',
        // 更新时间配置
        lastUpdated: '发表于',
        // 菜单配置
        nav: [
            {
                text: '技术',
                link: '/tech/'
            },
            {
                text: '生活',
                link: '/life/'
            },
            {
                text: 'Poker',
                link: '/poker/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/hulh122',
                target: '_blank'
            }
        ],
        // 侧导航配置
        sidebar: {
            '/tech/': [
                {
                    title: '介绍',
                    path: '/tech/',
                    collapsable: false,
                },
                {
                    title: '面试',
                    path: '/tech/面试/大纲',
                    children: [
                        {
                            title: '大纲',
                            path: '/tech/面试/大纲'
                        }
                    ]
                }
            ],
            '/life/': [
                {
                    title: '介绍',
                    path: '/life/',
                    collapsable: false,
                },
                {
                    title: '2021',
                    children: [
                        {
                            title: '对猿辅导的一些想法',
                            path: '/life/2021/09/对猿辅导的一些想法'
                        }
                    ]
                }
            ],
            '/poker/': [
                {
                    title: '介绍',
                    path: '/poker/',
                    collapsable: false,
                },
                {
                    title: '2021',
                    children: [
                        {
                            title: '一些有趣的手牌分析',
                            path: '/poker/2021/09/一些有趣的手牌分析'
                        }
                    ]
                }
            ]
        }
    }
}
