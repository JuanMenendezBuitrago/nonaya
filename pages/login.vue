<!--pages/login.vue-->
<script lang="ts" setup>
async function login(e: Event) {
	await $fetch("/api/login", {
		method: "POST",
		body: new FormData(e.target as HTMLFormElement)
	});
	await navigateTo("/");
}
</script>

<template>
	<h1>Sign in</h1>
	<form method="post" action="/api/login" @submit.prevent="login">
		<label htmlFor="email">email</label>
		<input name="email" id="email" />
		<br />
		<label htmlFor="password">Password</label>
		<input type="password" name="password" id="password" />
		<br />
		<button>Continue</button>
	</form>
</template>