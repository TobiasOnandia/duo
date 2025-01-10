import { Link } from "next-view-transitions"

export const Logo = () => {
    return (
        <h1 id="container-Duo" className="text-lg font-bold leading-tight text-gray-800">
            <Link href={"/"}
              data-testid="logo"
              aria-label="Duo Indumentaria">
                Duo Indumentaria
            </Link>
        </h1>
    )
}
