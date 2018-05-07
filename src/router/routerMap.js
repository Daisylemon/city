import Loading from '../components/common/Loading'

import loadable from 'react-loadable'

const Home = loadable({
    loader:() => import ('../components/Home'),
    loading:Loading
})
const Classify = loadable({
    loader:() => import ('../components/Classify'),
    loading:Loading
})
const Year = loadable({
    loader:() => import ('../components/Year'),
    loading:Loading
})
const Mine = loadable({
    loader:() => import ('../components/Mine'),
    loading:Loading
})
const Detail = loadable({
    loader:() => import ('../components/Detail'),
    loading:Loading
})

const List = loadable({
    loader:() => import ('../components/List'),
    loading:Loading
})

const Classif = loadable({
    loader:() => import ('../components/Classify/Classif'),
    loading:Loading
})

export const ROUTER_MAP = {
    NAV:[
        {
            title:'首页',
            to:'/',
            active:'active',
            icon:'iconfont comments'
        },{
            title:'分类',
            to:'/classify',
            active:'active',
            icon:'iconfont category'
        },{
            title:'年货节',
            to:'/year',
            active:'active',
            icon:'iconfont comments'
        },{
            title:'我的',
            to:'/mine',
            active:'active',
            icon:'iconfont cry'
        }
        
    ],
    ROUTER_VIEW:[
        {
            path:'/',
            component:Home
        },{
            path:'/classify',
            component:Classify
        },{
            path:'/year',
            component:Year
        },{
            path:'/mine',
            component:Mine
        },{
            path:'/detail',
            component:Detail
        },{
            path:'/list',
            component:List
        },{
            path:'/classify/class',
            component:Classif
        }
    ]
}