import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function LoginPage() {

  

  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="login" fill className="object-cover" />
      </div>
    </div>
  );
}
