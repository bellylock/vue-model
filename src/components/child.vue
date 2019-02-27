<template>
    <div class="hello">
        <input type="button" @click="chilCall()" value="调用child页面的数据"/>
        <p>
            <router-link to='/father'>跳转到father页面</router-link>
        </p>
        <ul>
            <li data-status="0" :class="{active : index == flag }" v-for="(item,index) in arr"
                @click="change(index);get($event)">{{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'child',
        data() {
            return {
                flag: 0,
                arr: [
                    {
                        name: "belly1",
                        age:24
                    },
                    {
                        name: "belly2",
                        age:26
                    },
                    {
                        name: "belly3",
                        age:28
                    },
                    {
                        name: "belly4",
                        age:30
                    },
                    {
                        name: "belly5",
                        age:32
                    },
                ]
            }
        },
        methods: {
            chilCall(pars) {
                this.$emit('newNodeEvent', this.arr)
            },
            change(index) {
                this.flag = index
            },
            get(e) {
                // var text = e.target.getAttribute("data-status");
                // var context = e.target.innerText;
                // e.target.innerText = "come on"
            }
        }
    }
</script>

<style scoped lang="scss">
    ul {
        width: 100%;
        overflow: hidden;
        li {
            &.active {
                border-color: red;
                color: #dc0201;
            }
            list-style: none;
            margin-right: 15px;
            float: left;
            width: 100px;
            height: 30px;
            line-height: 30px;
            border: 1px solid #ccc;
            text-align: center;
            font-size: 14px;
            color: #333
        }
    }
</style>
