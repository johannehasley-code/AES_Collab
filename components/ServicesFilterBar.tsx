
import { Button } from "@/components/ui/button"
import { Category } from "@/types/service"

interface ServicesFilterBarProps {
    categories: readonly string[]
    selectedCategory: string
    onCategoryChange: (category: string) => void
}

export default function ServicesFilterBar({
    categories,
    selectedCategory,
    onCategoryChange,
}: ServicesFilterBarProps) {
    return (
        <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
                <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => onCategoryChange(cat)}
                    size="sm"
                >
                    {cat}
                </Button>
            ))}
        </div>
    )
}