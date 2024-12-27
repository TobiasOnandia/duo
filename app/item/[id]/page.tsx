import { Toaster } from "sonner";
import { Details } from "../../components/product/Details";
import { Suspense } from "react";

export default async function Page({ params }: {
    params: Promise<{ id: string }>
}) {


    const key = await params.then((res) => res.id)
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <>

                <Toaster position="top-right" richColors />
                <Details id={key} />
            </>
        </Suspense>
    )
}