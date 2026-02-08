
import { Button } from "@/components/ui/button"
import { MessageSquarePlus, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ServicesActions() {
    return (
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
                <Link href="/connexion">
                    <MessageSquarePlus className="h-5 w-5" />
                    Demander un service
                </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/connexion">
                    <Sparkles className="h-5 w-5" />
                    Proposer un service
                </Link>
            </Button>
        </div>
    )
}