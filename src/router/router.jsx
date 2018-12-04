/**
 * @desc 路由组件页面(一般情况下路由在此页面更改即可)
 * @author lsy
 */

import Home from '@/containers/Home';
import Part1 from '@/containers/Pages/Part1'
import Part2_1_1 from '@/containers/Pages/Part2/Part2_1/Part2_1_1'
import Part2_1_2 from '@/containers/Pages/Part2/Part2_1/Part2_1_2'
import Part2_2 from '@/containers/Pages/Part2/Part2_2'

const router = [
    {
        name: "首页",
        path: "/",
        component: Home,
        type: "el-icon-message"
    },
    {
        name: "组件1",
        path: "/Part1",
        component: Part1,
        type: "el-icon-message"
    },
    {
        name: "组件2",
        path: "/Part2",
        type: "el-icon-message",
        children: [
            {
                name: "组件2_1",
                path: "/Part2_1",
                children: [
                    {
                        name: "组件2_1_1",
                        path: "/Part2_1_1",
                        component: Part2_1_1
                    },
                    {
                        name: "组件2_1_2",
                        path: "/Part2_1_2",
                        component: Part2_1_2
                    }
                ]
            },
            {
                name: "组件2_2",
                path: "/Part2_2",
                component: Part2_2
            },
        ]
    }
]

export default router