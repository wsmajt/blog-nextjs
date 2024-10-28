"use server";

import { deleteSessionTokenCookie, getCurrentSession, invalidateSession } from "@/lib/server/sessions";

export async function GET(request: Request) {
    const { session } = await getCurrentSession();

    if (session === null) {
        return Response.redirect(new URL("/login", request.url), 302);
    }

    await invalidateSession(session.id);
    await deleteSessionTokenCookie();

    return Response.redirect(new URL("/login", request.url), 302);
}
