import { Toaster } from "sonner";
import { Details } from "../../components/Details";

export default async function Page({ params }: {
    params: Promise<{id : string}>
}) {


    const key= await params.then((res) => res.id)
    return(
        <>
            <Toaster position="top-right" richColors />
            <Details id={key} />
        </>
    )
}