import { Link } from "next-view-transitions"

export const Logo = () => {
    return (
        <h1 className="text-lg font-bold leading-tight text-gray-800">
            <Link href={"/"} aria-label="Duo Indumentaria">
                Duo Indumentaria
            </Link>
        </h1>
    )
}