// data/services.ts
import { BookOpen, FileText, Code, Microscope, Languages, Calculator, GraduationCap, Briefcase, Sparkles, Heart, Camera, Palette } from "lucide-react"
import { Service } from "@/types/service"

export const categories = ["Tous", "Cours particuliers", "Relecture", "Projet étudiant"] as const

export const services: Service[] = [

    {
        title: "Besoin d'aide pour un mémoire ?",
        description: "Je cherche une aide pour la correction et l'amélioration de mon mémoire.",
        name: "Clara B.",
        level: "Étudiante en Master",
        tag: "Relecture",
        icon: FileText,
    },
    {
        title: "Relecture de thèse",
        description: "Relecture et correction de thèse en sciences sociales.",
        name: "Thomas R.",
        level: "Doctorant en sociologie",
        tag: "Relecture",
        icon: GraduationCap,
    },

    {
        title: "Relecture CV et lettre de motivation",
        description: "Optimisation de votre CV et lettre pour candidatures.",
        name: "Camille F.",
        level: "Conseillère en orientation",
        tag: "Relecture",
        icon: FileText,
    },



    {
        title: "Création d'une application mobile",
        description: "Développement d'apps iOS/Android avec React Native.",
        name: "Yassine M.",
        level: "Développeur freelance",
        tag: "Projet étudiant",
        icon: Code,

    },

    {
        title: "Photographie événementielle",
        description: "Photos pour événements étudiants, galas, concerts.",
        name: "Marc V.",
        level: "Étudiant photographe",
        tag: "Projet étudiant",
        icon: Camera,

    },

    {
        title: "Aide pour projet associatif",
        description: "Conseil en gestion de projet et organisation d'événements.",
        name: "Nicolas G.",
        level: "Président d'association",
        tag: "Projet étudiant",
        icon: Heart,

    },
    {
        title: "Cours de Physique-Chimie",
        description: "Cours particuliers en physique et chimie, niveau lycée et prépa.",
        name: "Sophie M.",
        level: "Étudiante en école d'ingénieur",
        tag: "Cours particuliers",
        icon: Microscope,

    },
    {
        title: "Cours d'Anglais",
        description: "Cours d'anglais conversationnel et préparation TOEFL/IELTS.",
        name: "James W.",
        level: "Étudiant bilingue en Master",
        tag: "Cours particuliers",
        icon: Languages,

    },

    {
        title: "Cours de Statistiques",
        description: "Aide en statistiques descriptives et inférentielles, utilisation de R.",
        name: "Marie D.",
        level: "Doctorante en statistiques",
        tag: "Cours particuliers",
        icon: Calculator
    },



]