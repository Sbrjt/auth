const config = {
	apiKey: 'AIzaSyBiI6qKupiUGs7LS65-a6R-FoE0oJkDFyY',
	authDomain: 'proj1-a2450.firebaseapp.com',
	projectId: 'proj1-a2450',
	storageBucket: 'proj1-a2450.appspot.com',
	messagingSenderId: '1094328919585',
	appId: '1:1094328919585:web:ea3915abed993288b4e560'
}

const app = firebase.initializeApp(config)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

btn1.addEventListener('click', async () => {
	await auth.signInWithPopup(provider)
})

btn2.addEventListener('click', async () => {
	await auth.signOut()
})

auth.onAuthStateChanged((usr) => {
	if (usr) {
		p.innerHTML = 'Logged in'
		btn1.disabled = true
		btn2.disabled = false
	}
	else {
		p.innerHTML = 'Logged out'
		btn1.disabled = false
		btn2.disabled = true
	}
})

// google one-tap
var ui = new firebaseui.auth.AuthUI(auth)

ui.start('#firebaseui-auth-container', {
	signInOptions: [
		{
			provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			clientId: '1094328919585-10vgakdq0kcdq846sk7jucfc78po3gqs.apps.googleusercontent.com'
		}
	]
	// credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO // doesn't work
})
