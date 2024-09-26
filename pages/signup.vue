<!--pages/signup.vue-->
<script lang="ts" setup>
async function signup(e: Event) {
	await $fetch("/api/signup", {
		method: "POST",
		body: new FormData(e.target as HTMLFormElement)
	});
	await navigateTo("/");
}
</script>

<template>
	<h1>Create an account</h1>
	<form method="post" action="/api/signup" @submit.prevent="signup">
		<label htmlFor="email">email</label>
		<input name="email" id="email" />
		<br />
		<label htmlFor="password">Password</label>
		<input type="password" name="password" id="password" />
		<br />
		<button>Continue</button>
	</form>
</template>