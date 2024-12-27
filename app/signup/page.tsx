import { Suspense } from "react";
import { Signup } from "../components/Signup";

export default function Page() {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Signup />
            </Suspense>
        </main>
    )
}
