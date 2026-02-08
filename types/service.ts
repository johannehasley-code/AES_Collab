// types/service.ts
import { LucideIcon } from 'lucide-react'

export interface Service {
    title: string
    description: string
    name: string
    level: string
    tag: string
    icon: LucideIcon
}


export type Category = "Tous" | "Cours particuliers" | "Relecture" | "Projet étudiant"