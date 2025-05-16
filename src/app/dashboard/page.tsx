import { getAuthSession } from "@libs/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getAuthSession();

    if (!session?.user) redirect('/login');

    return (
        <main>
            <h1>Bem-vindo, {session.user.name}!</h1>
        </main>
    )
}