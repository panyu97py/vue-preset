import app from './app'
import login from './login'
import routerView from '@/components/routerView'

export default [
    {
        path: '/',
        redirect: {name: 'app'},
        component: routerView,
        children: [
            app,
            login
        ]
    },
]
