// server/api/user.get.ts
export default defineEventHandler((event) => {
    if (event.context.user) {
        // redirect here if there's no user
		console.log(event.context.user);
	}
	return event.context.user;
});