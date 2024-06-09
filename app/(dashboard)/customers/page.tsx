
import { DataTable } from '@/components/custom_ui/DataTable'
import { columns } from '@/components/customers/CustomerColumn'
import Customer from '@/lib/modles/Customer'
import { connectToDB } from '@/lib/mongoDB'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const Customers = async () => {

    await connectToDB()

    const customers = await Customer.find().sort({ createdAt: "desc" })
    return (
        <div className='px-10 py-5'>
            <p className='text-heading2-bold'>Customers</p>
   
            <DataTable columns={columns} data={customers} searchKey='name'/>
        </div>
    )
}

export default Customers
