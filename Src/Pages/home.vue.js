const Home = Vue.component('Home', {
  data: function () {
    return {
  		title: "VueRouter CDN Template with Less - Home"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
	<div class="component home">
		
	</div>`
})