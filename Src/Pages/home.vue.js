const Home = Vue.component('Home', {
  data: function () {
    return {
  		title: "VueRouter CDN Template with Less - Home",
			showDropDown: false,
			form:{
				email: '',
				password: '',
				passwordConfirm: '',
				passwordConfirmShow: false,
				name: '',
				message: ''
			}
    }
  },
	created(){
		document.title = this.title 
	},
	methods:{
		changeState(){
			this.form.passwordConfirmShow = !this.form.passwordConfirmShow
		}
	},
  template: `
	<div class="component home">
		<form class="dk-form" @submit.prevent="console.log('null')">
			<h2 class="dk-form-title">Register</h2>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="mail-outline"></ion-icon>
				<input type="email" class="dk-input-box" v-model="form.email" placeholder="Your email..." required/>
			</label>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="lock-closed-outline"></ion-icon>
				<input :type="form.passwordConfirmShow ? 'text' : 'password'" class="dk-input-box" v-model="form.password" placeholder="Your password..." required />
			</label>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="lock-closed-outline"></ion-icon>
				<input :type="form.passwordConfirmShow ? 'text' : 'password'" class="dk-input-box" v-model="form.passwordConfirm" placeholder="Confirm your password" required />
			</label>
			<label class="dk-show-password">Show password <input type="checkbox" @click="changeState()" /></label>
			<button class="dk-form-submit" type="submit"><ion-icon name="send-outline" class="dk-submit-icon"></ion-icon> Register</button>
		</form>

		<form class="dk-form" @submit.prevent="console.log('null')">
			<h2 class="dk-form-title">Log in</h2>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="mail-outline"></ion-icon>
				<input type="email" class="dk-input-box" v-model="form.email" placeholder="Your email..." />
			</label>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="lock-closed-outline"></ion-icon>
				<input :type="form.passwordConfirmShow ? 'text' : 'password'" class="dk-input-box" v-model="form.password" placeholder="Your password..." required />
			</label>
			<label class="dk-show-password">Show password <input type="checkbox" @click="changeState()" /></label>
			<button class="dk-form-submit" type="submit"><ion-icon name="send-outline" class="dk-submit-icon"></ion-icon> Login</button>
		</form>

		<form class="dk-form" @submit.prevent="console.log('null')">
			<h2 class="dk-form-title">Contact me</h2>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="person-outline"></ion-icon>
				<input type="text" class="dk-input-box" v-model="form.name" placeholder="Your name..." required />
			</label>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="mail-outline"></ion-icon>
				<input type="email" class="dk-input-box" v-model="form.email" placeholder="Your email..." />
			</label>
			<label class="dk-input-label">
				<ion-icon class="dk-input-icon" name="chatbox-ellipses-outline"></ion-icon>
				<textarea class="dk-input-box" v-model="form.message" placeholder="Your message..." cols="30" rows="5"></textarea>
			</label>
			<button class="dk-form-submit" type="submit"><ion-icon name="send-outline" class="dk-submit-icon"></ion-icon> Send Contant</button>
		</form>
	</div>`
})