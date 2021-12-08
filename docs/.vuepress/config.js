module.exports = {
    // 页头
    title: '胡凌寒的博客',
    // meta 描述
    description: '胡凌寒的博客',
    // 标签
    head: [
        ['link', {rel: 'shortcut icon', href: '/logo.png'}]
    ],
    // 导航栏配置
    themeConfig: {
        logo: '/logo.png',
        // 更新时间配置
        lastUpdated: '最后更新',
        // 菜单配置
        nav: [
            {
                text: '技术',
                link: '/tech/'
            },
            // {
            //     text: '生活',
            //     link: '/life/'
            // },
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
                    title: '近期更新',
                    path: '/tech/',
                    collapsable: false,
                },
                {
                    title: '前端基础',
                    children: [
                        {
                            title: '大纲',
                            path: '/tech/前端基础/大纲'
                        },
                        {
                            title: 'Javascript 基础',
                            path: '/tech/前端基础/Javascript 基础/数据结构',
                            children: [
                                {
                                    title: '数据结构',
                                    path: '/tech/前端基础/Javascript 基础/数据结构'
                                },
                                {
                                    title: '原型链',
                                    path: '/tech/前端基础/Javascript 基础/原型链'
                                },
                                {
                                    title: 'instanceof',
                                    path: '/tech/前端基础/Javascript 基础/instanceof'
                                },
                                {
                                    title: 'new 一个对象的过程',
                                    path: '/tech/前端基础/Javascript 基础/new 一个对象的过程'
                                },
                                {
                                    title: 'Object.create 详解',
                                    path: '/tech/前端基础/Javascript 基础/Object.create 详解'
                                },
                                {
                                    title: 'typeof',
                                    path: '/tech/前端基础/Javascript 基础/typeof'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '技术随笔',
                    children: [
                        {
                            title: 'Javascript 中的安全整数',
                            path: '/tech/2021/Javascript 中的安全整数'
                        },
                        {
                            title: '包管理工具',
                            path: '/tech/2021/包管理工具'
                        }
                    ]
                }
            ],
            '/life/': [
                {
                    title: '近期更新',
                    path: '/life/',
                    collapsable: false,
                },
                {
                    title: '2021',
                    children: [
                        {
                            title: '对猿辅导的一些想法',
                            path: '/life/2021/对猿辅导的一些想法'
                        }
                    ]
                }
            ],
            '/poker/': [
                {
                    title: '近期更新',
                    path: '/poker/',
                    collapsable: false,
                },
                {
                    title: '2021',
                    children: [
                        {
                            title: '一些有趣的手牌分析',
                            path: '/poker/2021/一些有趣的手牌分析'
                        }
                    ]
                }
            ]
        }
    },
    plugins: [
        [
            '@vuepress/blog',
            {
                siteMap: {
                    hostname: 'https://hulh122.github.io'
                },
            }
        ]
    ]
}
