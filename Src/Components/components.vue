Vue.component('dk-dropdown', {
	props: ['items'],
	data: () => {
		return {
			isOpen: false
		}
	},
	methods:{
		changeState(){
			this.isOpen ? this.isOpen = false : this.isOpen = true
		}
	},
  template: `
	<div class="dk-dropdown">
		{{isOpen}}
		<button></button>
	</div>
	`
})