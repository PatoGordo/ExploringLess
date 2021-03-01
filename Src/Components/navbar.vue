Vue.component('app-navbar', {
  data: function () {
    return {
			isOpen: false
    }
  },
	methods:{
		scrollToTop(){
			scrollTo({ top: 0, behavior: 'smooth' })
		},
		changeState(){
			this.isOpen ? this.isOpen = false : this.isOpen = true
			this.scrollToTop()
		},
		goToHome(){
			window.location.href = '/#/'
			this.isOpen = false
			this.scrollToTop()
		}
	},
  template: `
		<nav class="navbar">
			<input @click="changeState()" type="checkbox" id="check-nav-button" class="check-nav-button" />
			<div class="nav-header">
				<h2 class="nav-logo" @click="goToHome()">PatoGordo</h2>
				<label for="check-nav-button"><ion-icon class="nav-icon" :name="isOpen ? 'close-outline' : 'menu-outline'"></ion-icon></label>
			</div>
			<ul class="nav-list":class="isOpen ? 'none' : 'close'" @click="changeState()">
				<li class="nav-link" ><router-link to="/">Home</router-link></li>
				<li class="nav-link"><router-link to="/components">Components</router-link></li>
			</ul>
		</nav>
	`
})