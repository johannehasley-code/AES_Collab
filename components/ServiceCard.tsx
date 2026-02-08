
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Service } from "@/types/service"

interface ServiceCardProps {
    service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon

    return (
        <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-medium">{service.title}</h3>
            </CardHeader>

            <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                    {service.description}
                </p>

                3
                <div className="mt-4 flex items-center justify-center gap-3">

                    <div className="text-left text-sm">
                        <p className="font-medium">{service.name}</p>
                        <p className="text-muted-foreground">{service.level}</p>
                    </div>
                </div>

                <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                    {service.tag}
                </span>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <Button asChild size="sm">
                        <Link href="/">Contacter</Link>
                    </Button>

                    <Button asChild size="sm" variant="outline">
                        <Link href="/">Enregistrer</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}