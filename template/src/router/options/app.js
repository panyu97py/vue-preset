export default {
    name: 'app',
    path: 'app',
    meta: {},
    component: () => import('@/views/app'),
    redirect: {name: 'showPageDemo'},
    children: [
        {
            name: 'showPageDemo',
            path: 'showPageDemo',
            meta: {title: 'showPageDemo'},
            component: () => import('@/views/app/showPageDemo'),
        },
        {
            name: 'hidePageDemo',
            path: 'hidePageDemo',
            meta: {title: 'hidePageDemo'},
            component: () => import('@/views/app/hidePageDemo'),
            hidden: true
        }
    ]
}
