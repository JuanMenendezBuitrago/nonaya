import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { PrismaClient } from "@prisma/client";
import { isValidEmail } from "~/utils/validators"

const client = new PrismaClient();

export default eventHandler(async (event) => {
	const formData = await readFormData(event);
	const email = formData.get("email");
	if (!email || typeof email !== "string" || ! isValidEmail(email)) {
		return new Response("Invalid email", {
			status: 400
		});
	}
	const password = formData.get("password");
	if (!password || typeof password !== "string" || password.length < 6) {
		return new Response("Invalid password", {
			status: 400
		});
	}
	
	const passwordHash = await hash(password, {
		// recommended minimum parameters
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});
	const userId = generateIdFromEntropySize(10); // 16 characters long

	try {
		await client.user.create({
			data:{
				id: userId,
				email,
				passwordHash: passwordHash
			}
		});

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/",
				"Set-Cookie": sessionCookie.serialize()
			}
		});
	} catch {
		// db error, email taken, etc
		return new Response("Email already used", {
			status: 400
		});
	}
});