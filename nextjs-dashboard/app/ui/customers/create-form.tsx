'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createComment } from '@/app/lib/action'
import { useFormState } from 'react-dom'; 


export default function Form({
  customers,
}: {
  customers: CustomerField[];
}) {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createComment, initialState);
  var data = "<b> lorem ipsum dolar sit amet </b>";

  return (

    <form action={dispatch}>
      <input type="text" name="name" />
      <input type="text" name="text" />
      <button type="submit">Submit</button>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </form>
  );
}
