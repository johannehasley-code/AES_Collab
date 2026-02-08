
"use client"

import { useState } from "react"
import ServicesHeader from "./ServicesHeader"
import ServicesActions from "./ServicesActions"
import ServicesFilterBar from "./ServicesFilterBar"
import ServicesList from "./ServicesList"
import { services } from "@/data/services"
import { Category } from "@/types/service"
import { categories } from "@/data/services"
import { Service } from "@/types/service"

export default function ServicesSection() {
    const [selectedCategory, setSelectedCategory] = useState("Tous")

    const filteredServices =
        selectedCategory === "Tous"
            ? services
            : services.filter((s) => s.tag === selectedCategory)

    return (
        <section className="bg-zinc-50 py-24 dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-6">

                <ServicesHeader />

                <ServicesActions />

                <ServicesFilterBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

                <ServicesList services={filteredServices} />

            </div>
        </section>
    )
}