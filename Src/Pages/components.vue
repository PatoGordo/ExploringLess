const Components = Vue.component('Components', {
  data: function () {
    return {
			openbars: false,
			isDark: false
    }
  },
	methods:{
		changeOpenBars(){
			this.openbars = !this.openbars
		},
		changeDarkMode(){
			
		}
	},
	created(){
		
	},
  template: `
	<div class="component components">
		<h2>Switchs/Togglers</h2>

		<label class="dk-switch">
			<input type="checkbox">
			<span class="dk-slider"></span>
		</label>
		<label class="dk-switch" @click="changeDarkMode()">
			<input type="checkbox" @click="changeDarkMode()" :checked="isDark">
			<span class="dk-slider round"></span>
		</label>

		<div id="nav-icon" :class="openbars ? 'open' : 'close'" @click="changeOpenBars()">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<!-- I use this base https://codepen.io/designcouch/pen/Atyop -->
	</div>
	`
})