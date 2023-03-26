import AuthLayout from '@/components/layout/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

function ErrorMessage({ message }: { message?: any }) {
  return (
    <>
      {message && (
        <p className="text-sm text-red-500">{message as unknown as string}</p>
      )}
    </>
  );
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(
      z.object({
        name: z.string().min(3, {
          message: 'O nome deve conter no mínimo 3 caracteres',
        }),

        email: z.string().email({
          message: 'Email inválido',
        }),
        phone: z
          .string()
          .min(11, {
            message: 'O telefone deve conter no mínimo 11 caracteres',
          })
          .max(11, {
            message: 'O telefone deve conter no máximo 11 caracteres',
          }),
        password: z.string().min(6, {
          message: 'A senha deve conter no mínimo 6 caracteres',
        }),
      }),
    ),
  });

  function onSubmit(data: any) {
    if (isValid) {
      console.log(data);
    }
  }

  return (
    <AuthLayout>
      <div className="flex w-full flex-col items-center justify-center space-y-4 p-3">
        <form
          className="flex w-full max-w-md flex-col space-y-4 rounded-lg border border-black p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="flex flex-col">
            <h1 className="self-start text-3xl font-bold">Criar conta</h1>
            <p className="text-gray-500">Preencha os dados para continuar</p>
          </section>

          <section className="flex flex-col">
            <label>Nome</label>
            <input
              type="nome"
              {...register('name')}
              className="rounded-lg border-2 border-black p-2"
              placeholder="Digite seu nome"
              autoComplete="text"
            />
            <ErrorMessage message={errors.name?.message} />
          </section>

          <section className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              {...register('email')}
              className="rounded-lg border-2 border-black p-2"
              placeholder="Digite seu email"
              autoComplete="email"
            />
            <ErrorMessage message={errors.email?.message} />
          </section>

          <section className="flex flex-col">
            <label>Telefone</label>
            <input
              type="tel"
              {...register('phone')}
              className="rounded-lg border-2 border-black p-2"
              placeholder="Digite seu phone"
              autoComplete="tel"
            />
            <ErrorMessage message={errors.phone?.message} />
          </section>

          <section className="flex flex-col">
            <label className="self-start ">Senha</label>
            <input
              type="password"
              {...register('password')}
              className="rounded-lg border-2 border-black p-2"
              placeholder="Pelo menos 6 caracteres"
              autoComplete="current-password"
            />
            <ErrorMessage message={errors.password?.message} />
          </section>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-500 p-4 font-bold text-white hover:bg-purple-700"
          >
            Cadastrar
          </button>
        </form>

        <section className="flex flex-col items-center justify-center">
          <p className="text-lg text-gray-500">Já tem uma conta?</p>
          <Link
            href="/auth/login"
            className="text-purple-500 underline hover:text-purple-700"
          >
            Fazer login
          </Link>
        </section>
      </div>
    </AuthLayout>
  );
}
