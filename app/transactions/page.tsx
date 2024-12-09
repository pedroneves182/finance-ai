import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ArrowDownUpIcon } from "lucide-react";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>

      {transactions.map((t) => (
        <div key={t.id}>{t.name}</div>
      ))}
    </div>
  );
}
