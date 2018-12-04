import Home from '@/containers/Home';
import Part1 from '@/containers/Pages/Part1'
import Part2_1_1 from '@/containers/Pages/Part2/Part2_1/Part2_1_1'
import Part2_1_2 from '@/containers/Pages/Part2/Part2_1/Part2_1_2'
import Part2_2 from '@/containers/Pages/Part2/Part2_2'

const router = [
    {
        name: "home",
        path: "/",
        component: Home,
        type: "el-icon-message"
    },
    {
        name: "part1",
        path: "/Part1",
        component: Part1,
        type: "el-icon-message"
    },
    {
        name: "part2",
        path: "/Part2",
        type: "el-icon-message",
        children: [
            {
                name: "part2_1",
                path: "/Part2_1",
                children: [
                    {
                        name: "Part2_1_1",
                        path: "/Part2_1_1",
                        component: Part2_1_1
                    },
                    {
                        name: "Part2_1_2",
                        path: "/Part2_1_2",
                        hideInMenu: true,
                        component: Part2_1_2
                    }
                ]
            },
            {
                name: "part2_2",
                path: "/Part2_2",
                component: Part2_2
            },
        ]
    }
]

export default router