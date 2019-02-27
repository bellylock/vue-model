<template>
	<div class="cabin">
		<p>{{otherData}}</p>
		<div>
			<span slot="header">hello world1</span>
			<span slot="main">hello world2</span>
			<span slot="footer">hello world3</span>
			<span slot="other">{{otherData}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"test", 
		data(){
			return{
				otherData:"123"
			}
		},
		methods:{

		}
	}
</script>

<style scoped>
	
</style>