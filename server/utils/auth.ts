import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient }  from "@prisma/client";
import { Lucia }         from "lucia";

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		// IMPORTANT!
		attributes: {
			// set to `true` when using HTTPS
			secure: !process.dev
		},
	},
    getUserAttributes: (attributes) => {
		return {
			// we don't need to expose the password hash!
			email: attributes.email
		};
	}
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
        DatabaseUserAttributes: {
            email: string;
        };
	}
}