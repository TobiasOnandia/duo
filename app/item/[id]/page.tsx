import { Details } from "../../components/Details";

export default async function Page({ params }: {
    params: Promise<{id : string}>
}) {


    const key= await params.then((res) => res.id)
    return(
        <>
            <Details id={key} />
        </>
    )
}