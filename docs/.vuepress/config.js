module.exports = {
    // 页头
    title: 'Andy\'s Blog',
    // meta 描述
    description: '胡凌寒 Andy 的博客',
    // base 路径，基于 gitHubPage: .io/blog/ 二级目录
    base: '/blog/',
    // 导航栏配置
    themeConfig: {
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
                    title: '2021',
                    path: '/tech/2021/09/one',
                    children: [
                        {
                            title: 'one',
                            path: '/tech/2021/09/one'
                        },
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
