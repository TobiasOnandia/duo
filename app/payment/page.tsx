import { Suspense } from "react";
import { Payment } from "@components/checkout/Payment";
import { PaymentSkeleton } from "../components/skeleton/PaymentSkeleton";

export default function Page() {
    return (
        <>
            <Suspense fallback={<PaymentSkeleton />}>
                <Payment />
            </Suspense>
        </>
    )
}