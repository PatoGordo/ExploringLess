const Components = Vue.component('Components', {
  data: function () {
    return {
			openbars: false
    }
  },
	methods:{
		changeOpenBars(){
			this.openbars = !this.openbars
		}
	},
  template: `
	<div class="component components">
		<h2>Switchs/Togglers</h2>

		<label class="dk-switch">
			<input type="checkbox">
			<span class="dk-slider"></span>
		</label>
		<label class="dk-switch">
			<input type="checkbox">
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