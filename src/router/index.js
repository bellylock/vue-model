import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import child from '@/components/child'
import father from '@/components/father'
import test from '@/components/text'
import Code from '@/components/code'
import Clipboard from '@/components/clipboard'
import hook from '@/components/hook'


Vue.use(Router);
Vue.use(iView);


export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: "/child",
            name: "child",
            component: child
        },
        {
            path: '/father',
            name: "father",
            component: father
        },
        {
            path: "/test",
            name: "test",
            component: test
        },
        {
            path: "/code",
            name: "codes",
            component: Code
        },
        {
            path: "/clipboard",
            name: "clipboard",
            component: Clipboard
        },
        {
            path: "/hook",
            name: "hook",
            component: hook
        }
    ]
})
