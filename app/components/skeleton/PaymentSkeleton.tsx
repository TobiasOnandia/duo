import { AddressUserSkeleton } from "./AddressUserSkeleton"
import HeaderSkeleton from "./HeaderSkeleton"
import { OrderSummarySkeleton } from "./OrderSummarySkeleton"

export const PaymentSkeleton = () => {
    return (
        <>
            <HeaderSkeleton />
            <AddressUserSkeleton />
            <OrderSummarySkeleton />

        </>
    )
}