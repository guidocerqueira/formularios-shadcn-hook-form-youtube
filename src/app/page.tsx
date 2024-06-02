'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TFormLogin = {
  email: string
  password: string
}

export default function Home() {
  const form = useForm<TFormLogin>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function handleSubmitLogin(data: TFormLogin){
    console.log(data)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Digite seu email e senha para entrar no sistema.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmitLogin)}>
              <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Digite sua senha" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">Entrar</Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          <CardDescription>
            Não tem uma conta? <Link className="text-white" href='/cadastro'>Cadastre-se</Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
