import { getAuthSession } from "@libs/auth";
import { redirect } from "next/navigation";
import { loadTransactions } from "@libs/loadTransactions";
import DashboardContent from "./DashboardContent";

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session?.user) redirect("/login");

  const transactions = await loadTransactions();

  return <DashboardContent transactions={transactions} />;
}
