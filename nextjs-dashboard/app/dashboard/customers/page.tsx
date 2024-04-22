import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchComments, fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
import { string } from 'zod';
 
export const metadata: Metadata = {
  title: 'Comments',
};
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {


  const comments = await fetchComments();
  const com = comments.map((comment) => 
    <div dangerouslySetInnerHTML={{__html: comment.text}}/>
  ); 
  const name = comments.map((comment) => 
    <div>
      <a href={comment.name}>{comment.name}</a>
    </div>
  ); 
  const a = comments[0];
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Create New Comment and Link</h1>
      </div>
      <a href="/dashboard/customers/create">Click Here</a>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Comments</h1>
      </div>
    <div>
     {com}
    </div>
    <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>User Links</h1>
    </div>
    <div>
      {name}
    </div>
    </div>
  );
}