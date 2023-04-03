import AuthLayout from '@/components/layout/auth';
import { fetchProfileAction } from '@/components/user/slice/actions/fetch-profile';
import { loginAction } from '@/components/user/slice/actions/login';
import { useAppDispatch } from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FieldValues, useForm } from 'react-hook-form';
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

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      z.object({
        email: z.string().email({
          message: 'Email inválido',
        }),
        password: z.string().min(6, {
          message: 'A senha deve conter no mínimo 6 caracteres',
        }),
      }),
    ),
  });

  async function onSubmit(data: FieldValues) {
    const result = await dispatch(
      loginAction({
        email: data.email,
        password: data.password,
      }),
    );

    if (loginAction.fulfilled.match(result)) {
      dispatch(fetchProfileAction()).then(() => replace('/'));
    }
  }

  return (
    <AuthLayout>
      <div className="flex w-full flex-col items-center justify-center space-y-4 p-3">
        <form
          className="flex w-full max-w-lg flex-col space-y-4 rounded-lg border border-black p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="flex flex-col">
            <h1 className="self-start text-3xl font-bold">Fazer login</h1>
            <p className="text-gray-500">Faça login para continuar</p>
          </section>

          <section className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              {...register('email')}
              className="rounded-lg border-2 border-black p-4"
              placeholder="Digite seu email"
              autoComplete="email"
            />
            <ErrorMessage message={errors.email?.message} />
          </section>

          <section className="flex flex-col">
            <label className="self-start ">Senha</label>
            <input
              type="password"
              {...register('password')}
              className="rounded-lg border-2 border-black p-4"
              placeholder="Digite sua senha"
              autoComplete="current-password"
            />
            <ErrorMessage message={errors.password?.message} />
          </section>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-500 p-4 font-bold text-white hover:bg-purple-700"
          >
            Entrar
          </button>
        </form>

        <section className="flex flex-col items-center justify-center">
          <p className="text-lg text-gray-500">Não tem uma conta?</p>
          <Link
            href="/auth/register"
            className="text-purple-500 underline hover:text-purple-700"
          >
            Cadastre-se
          </Link>
        </section>
      </div>
    </AuthLayout>
  );
}
