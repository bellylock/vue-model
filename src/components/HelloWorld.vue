<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <Select v-model="model1" style="width:200px" placeholder="选择城市">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <div class="box">
            <h1>哈萨克绝代风华</h1>
            <p>监考老师电话费</p>
            <span>jsdklghf</span>
        </div>
        <Row>
            <Col span="12">
                <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
            <Col span="12">
                <DatePicker type="daterange" placement="bottom-end" placeholder="Select date"
                            style="width: 200px"></DatePicker>
            </Col>
        </Row>
        <div>
            <Select v-model="model9" style="width:200px">
                <Option value="New York" label="New York">
                    <span>New York</span>
                    <span style="float:right;color:#ccc">America</span>
                </Option>
                <Option value="London" label="London">
                    <span>London</span>
                    <span style="float:right;color:#ccc">U.K.</span>
                </Option>
                <Option value="Sydney" label="Sydney">
                    <span>Sydney</span>
                    <span style="float:right;color:#ccc">Australian</span>
                </Option>
            </Select>
        </div>
        <br/>
        <div>
            <select class="i_select">
                <option value="1">全部号码</option>
                <option value="2">5位QQ</option>
                <option value="3">6位QQ</option>
                <option value="4">7位QQ</option>
                <option value="5">8位QQ</option>
                <option value="6">9/10位QQ</option>
            </select>
        </div>
        <div>
            <router-link to='/child'>子组件</router-link>
            <router-link to='/father'>父组件</router-link>
        </div>
        <hr>
        <div class="boxes">
            <span ref="show" @click="show">click</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your',
                model9: '',
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        },
        mounted() {
            $('select:not(.ignore)').niceSelect();
            $(".i_select").css("width", "150px");
        },
        methods:{
            show(){
                this.$refs.show.style.fontSize = "25px";
                this.$refs.show.style.color = "red";
                // this.$refs.show.innerHTML = 'asdasdas'
                this.$refs.show.innerText = 'change content'
            }
        }
        // mounted(){
        //   var sd = $(".box h1").text();
        //   console.log(sd)
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .boxes{
        overflow: hidden;
        width: 100%;
        padding: 15px;
        span{
            color: orange;
            font-size: 16px;
            cursor: pointer;
        }
    }
</style>
