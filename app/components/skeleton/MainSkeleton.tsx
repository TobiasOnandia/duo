import { CardSkeleton } from "@components/skeleton/CardSkeleton"
import { CategorySkeleton } from "@components/skeleton/CategorySkeleton"
import HeaderSkeleton from "@components/skeleton/HeaderSkeleton"
import HeroSkeleton from "@components/skeleton/HeroSkeleton"

export const MainSkeleton = () => {
    return (
        <>
            <HeaderSkeleton />
            <HeroSkeleton />
            <CategorySkeleton />
            <CardSkeleton />
        </>
    )
}