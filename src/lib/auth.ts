import { getServerSession } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

export async function getAuthSession() {
  return await getServerSession(authOptions as NextAuthOptions);
}
