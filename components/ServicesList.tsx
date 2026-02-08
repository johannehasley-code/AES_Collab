
import ServiceCard from "./ServiceCard"
import { Service } from "@/types/service"

interface ServicesListProps {
    services: Service[]
}

export default function ServicesList({ services }: ServicesListProps) {
    return (
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
    )
}