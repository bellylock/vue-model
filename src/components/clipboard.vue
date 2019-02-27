<template>
	<div class="cabin">
		<button class="copylink"
                v-clipboard:copy="message"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制链接</button>
        <a :href="message">跳转到百度</a>
        <p @click="keep()" id="text">点击复制新内容</p>
	</div>
</template>

<script>
	export default{
		name:"clipboard", 
		data(){
			return{
				message:"这里是需要复制的内容",
			}
		},
		methods:{
			onCopy: function (e) {
                console.log(e.text);
                this.$Message.info('复制成功！');
            },
            onError: function (e) {
                this.$Message.info('复制失败！');
            },
            keep(){
            	var msg = document.getElementById("text").innerHTML;
				this.message = msg;
            }
		}
	}
</script>

<style scoped>
	
</style>