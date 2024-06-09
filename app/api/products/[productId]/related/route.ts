import Product from "@/lib/modles/Product";
import { connectToDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { productId: string } }) => {
    try {
        await connectToDB()

        const product = await Product.findById(params.productId)

        if (!product) {
            return new NextResponse(JSON.stringify({ message: "Product not found" }), { status: 404 })
        }

        const relatedProduct = await Product.find({
            $or: [
                { category: product.category },
                { colllections: { $in: product.collections } }
            ],
            _id: { $ne: product._id }
        })

        if (!relatedProduct) {
            return new NextResponse(JSON.stringify({ messagge: "No related product found" }), { status: 404 })
        }

        return NextResponse.json(relatedProduct, { status: 200 })

    } catch (error) {
        console.log('related GET', error);
        return new NextResponse("Internal server error", { status: 500 })

    }
}