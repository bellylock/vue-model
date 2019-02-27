<template>
	<div class="cabin">
        <h1>验证码</h1>
        <input type="button" @click="createCode" class="verification" v-model="checkCode"/>
	</div>
</template>

<script>
    var code = "";
	export default{
		name:"codes",
		data(){
			return{
                checkCode:"",
			}
		},
		methods:{
            // 验证码
            createCode(){
                //先清空验证码的输入
                this.code = "";
                this.checkCode = "";
                // this.picLyanzhengma = "";
                //验证码的长度
                var codeLength = 4;
                //随机数
                var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
                for(var i = 0; i < codeLength; i++) {
                    //取得随机数的索引（0~35）
                    var index = Math.floor(Math.random()*36);
                    //根据索引取得随机数加到code上
                    this.code += random[index];
                }
                //把code值赋给验证码
                this.checkCode = this.code;
            }
		},
        created(){
		    this.createCode()
        }
	}
</script>

<style scoped lang="scss">
    .cabin{
        padding: 50px 0 0 50px;
        .verification{
            &:focus{
                outline: none;
            }
            border: 1px solid #000;
            width: 100px;
            display: inline-block;
            line-height: 30px;
            text-align: center;
            letter-spacing: 8px;
            font-size: 15px;
            color: #000;
            cursor: pointer;
        }
    }
</style>