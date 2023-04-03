import { clearCart } from '@/components/cart/slice/cart-slice';
import { logout } from '@/components/user/slice/user-slice';
import { persistor, useAppDispatch } from '@/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LogoutPage() {
  const { replace } = useRouter();
  const dispatch = useAppDispatch();

  async function stopPersistor() {
    persistor.pause();
    await persistor.flush();
    await persistor.purge();
  }

  useEffect(() => {
    stopPersistor()
      .then(() => dispatch(logout()))
      .then(() => dispatch(clearCart()))
      .then(() => replace('/'));
  }, [dispatch, replace]);

  return <div />;
}
