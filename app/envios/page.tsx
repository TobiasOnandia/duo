import { Suspense } from "react";
import { Envios } from "../components/pages/Envios";

export default function Page() {
    return (
        <>
            <Suspense fallback={<h2>Loading</h2>}>
                <Envios />
            </Suspense>
        </>
    )
}