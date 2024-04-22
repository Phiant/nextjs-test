
import Form from '@/app/ui/customers/create-form';
import { FormEvent } from 'react'
import { fetchComments, fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { useFormState } from 'react-dom'; 
import { createComment } from '@/app/lib/action'



export default async function Page() {
  const comments = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Comments', href: '/dashboard/customers' },
          {
            label: 'Create Comment',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <p>Enter link then comment</p>
      <Form customers={comments} />
    </main>
  );
}
