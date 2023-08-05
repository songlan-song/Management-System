import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)

        if (username === 'admin' && password === 'admin') {
            return {
                code: 200,
                data: {
                    menu: [

                        {
                            path: "/",
                            name: "home",
                            label: 'Home page',
                            icon: 'House',
                            url: 'Home/Home',
                        },
                        {
                            path: "/mall",
                            name: "mall",
                            label: 'Commodity',
                            icon: 'Box',
                            url: 'MallManage/MallManage',
                        },
                        {
                            path: "/user",
                            name: "user",
                            label: 'User Management',
                            icon: 'User',
                            url: 'UserManage/Usermanage',
                        },
                        {
                            label: 'others',
                            icon: 'Location',
                            name: "other1",
                            children: [{
                                path: "/reminders",
                                name: "reminders",
                                label: 'Raminders',
                                icon: 'setting',
                                url: 'Other/Reminders',
                            },
                            {
                                path: "/page2",
                                name: "page2",
                                label: 'Page 2',
                                icon: 'setting',
                                url: 'Other/PageTwo',
                            }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === 'lansong' && password === 'lansong') {
            return {
                code: 200,
                data: {
                    menu: [

                        {
                            path: "/",
                            name: "home",
                            label: 'Home page',
                            icon: 'House',
                            url: 'Home/Home',
                        },
                        {
                            path: "/mall",
                            name: "mall",
                            label: 'Commodity',
                            icon: 'Box',
                            url: 'MallManage/MallManage',
                        },
                        {
                            label: 'others',
                            icon: 'Location',
                            name: "other1",
                            children: [{
                                path: "/reminders",
                                name: "reminders",
                                label: 'Reminders',
                                icon: 'setting',
                                url: 'Other/Reminders',
                            },
                            {
                                path: "/page2",
                                name: "page2",
                                label: 'Page 2',
                                icon: 'setting',
                                url: 'Other/PageTwo',
                            }
                            ]
                        }],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误'
                }
            }
        }
    }
}