import { columns } from "@/components/collections/CollectionColumn"
import { DataTable } from "@/components/custom_ui/DataTable"
import { Separator } from "@/components/ui/separator"

const OrderDetails = async ({ params }: { params: { orderId: string } }) => {

    const res = await fetch(`${process.env.ADMIN_DASHBOARD_URL}/api/orders/${params.orderId}`)

    const { orderDetails, customer } = await res.json()

    console.log(orderDetails);
    

    const { street, city, state, postalCode, country } = orderDetails.shippingAddress


    return (
        <div className="flex flex-col p-10 gap-5">
            <p className="text-base-bold">
                Order ID: <span className=" text-body-semibold text-blue-400 dark:text-gray-500">{orderDetails._id}</span>
            </p>
            <Separator className="bg-grey-1"/>
            <p className="text-base-bold">
                Customer name: <span className=" text-body-semibold text-blue-400 dark:text-gray-500">{customer.name}</span>
            </p>
            <Separator className="bg-grey-1"/>
            <p className="text-base-bold">
                Shipping address: <span className=" text-body-semibold text-blue-400 dark:text-gray-500">{street}, {city}, {state}, {postalCode}, {country}</span>
            </p>
            <Separator className="bg-grey-1"/>
            <p className="text-base-bold">
                Total Paid: <span className=" text-body-semibold text-blue-400 dark:text-gray-500">{orderDetails.totalAmount}</span>
            </p>
            <Separator className="bg-grey-1"/>
            <p className="text-base-bold">
                Shipping rate ID:  <span className=" text-body-semibold text-blue-400 dark:text-gray-500">{orderDetails.shippingRate}</span>
            </p>
            <Separator className="bg-grey-1"/>
            <DataTable columns={columns} data={orderDetails.products} searchKey="product"/>
        </div>
    )
}

export const dynamic = "force-dynamic";

export default OrderDetails