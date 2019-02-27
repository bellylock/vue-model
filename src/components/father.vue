<template>
　　<div id="app">
　　　　 <hello @newNodeEvent="parentLisen" />
        <p>{{msg}}</p>
        <br />
        <ul>
            <li v-for="item in msg">
                <p>{{item.age}}</p>
            </li>
        </ul>
        <br />
        <p><router-link to='/child'>跳转到child页面</router-link></p>
        <br />
		<pre>
		<span>123456</span><span>sdfsdf</span>
		<span>12345647674856</span>
		<em>sdfdgdgfdg</em>
		</pre>
        <br />
　　</div>
</template>

<script>
    import hello from './child'
    export default {
        name: 'father',
        data(){
            return{
                msg:"",
            }
        },
        components: {
            hello
        },
        methods: {
            parentLisen(evtValue) {
                //evtValue 是子组件传过来的值
                // alert(evtValue)
                this.msg = evtValue
            }
        },
    }
</script>
