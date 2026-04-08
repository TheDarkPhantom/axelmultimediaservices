import type { LucideIcon } from "lucide-react"
import {
  MonitorPlay,
  Radio,
  AudioLines,
  Wifi,
  Camera,
  Circle,
  Triangle,
  Move3d,
  Mic,
  Plane,
  Box,
} from "lucide-react"

export type GearDepartment = "Livestream" | "Videography"

export type GearIconName =
  | "MonitorPlay"
  | "Radio"
  | "AudioLines"
  | "Wifi"
  | "Camera"
  | "Circle"
  | "Triangle"
  | "Move3d"
  | "Mic"
  | "Plane"
  | "Box"

export interface GearItem {
  name: string
}

export interface GearSubcategory {
  title: string
  icon: GearIconName
  items: GearItem[]
}

export interface GearDepartmentData {
  department: GearDepartment
  slug: string
  description: string
  subcategories: GearSubcategory[]
}

export const gearIconMap: Record<GearIconName, LucideIcon> = {
  MonitorPlay,
  Radio,
  AudioLines,
  Wifi,
  Camera,
  Circle,
  Triangle,
  Move3d,
  Mic,
  Plane,
  Box,
}

export const GEAR_DEPARTMENTS: GearDepartmentData[] = [
  {
    department: "Livestream",
    slug: "livestream",
    description:
      "Broadcast-grade switching, wireless transmission, and redundant connectivity for zero-downtime live production.",
    subcategories: [
      {
        title: "Switchers",
        icon: "MonitorPlay",
        items: [
          { name: "Go Stream Ossee Duet ISO 8" },
          { name: "Feel World L4" },
        ],
      },
      {
        title: "Transmitters",
        icon: "Radio",
        items: [
          { name: "Hollyland Pyro H" },
          { name: "Hollyland Pyro S" },
          { name: "DJI SDR" },
          { name: "Acsoon Cineview 2" },
        ],
      },
      {
        title: "Audio Interface",
        icon: "AudioLines",
        items: [
          { name: "Zoom L8" },
          { name: "Allen & Heath CQ12T" },
        ],
      },
      {
        title: "Internet",
        icon: "Wifi",
        items: [
          { name: "Starlink (Gen 2)" },
          { name: "PepLink B One Plus" },
        ],
      },
    ],
  },
  {
    department: "Videography",
    slug: "videography",
    description:
      "Cinema-grade cameras, lenses, stabilization, aerial systems, and professional audio for every shooting scenario.",
    subcategories: [
      {
        title: "Camera",
        icon: "Camera",
        items: [{ name: "Sony FX3A" }],
      },
      {
        title: "Lenses",
        icon: "Circle",
        items: [
          { name: "Sony 70-200 GMii f/2.8" },
          { name: "Sony 200-600 G f/5.6–6.0" },
          { name: "Sony 24-105 f/4" },
          { name: "Sony 35 FE f/1.8" },
          { name: "Tamron 28-75 f/2.8" },
        ],
      },
      {
        title: "Tripods",
        icon: "Triangle",
        items: [
          { name: "SmallRig Tribex Tripod" },
          { name: "SmallRig Tripods" },
        ],
      },
      {
        title: "Gimbals",
        icon: "Move3d",
        items: [
          { name: "DJI Ronin RS3 Pro" },
          { name: "DJI Ronin RS4" },
        ],
      },
      {
        title: "Audio",
        icon: "Mic",
        items: [
          { name: "Hollyland Lark Max 2" },
          { name: "DJI Mic 1" },
        ],
      },
      {
        title: "Drone",
        icon: "Plane",
        items: [{ name: "DJI Mavic 4 Hasselblad" }],
      },
      {
        title: "Rig",
        icon: "Box",
        items: [
          { name: "Maincam Rig Setup (4 V-Mount Batteries + Monitor)" },
        ],
      },
    ],
  },
]

export function getAllDepartments(): GearDepartmentData[] {
  return GEAR_DEPARTMENTS
}

export function getDepartmentBySlug(
  slug: string
): GearDepartmentData | undefined {
  return GEAR_DEPARTMENTS.find((d) => d.slug === slug)
}

export function getAllGearItems(): { name: string; category: string }[] {
  return GEAR_DEPARTMENTS.flatMap((dept) =>
    dept.subcategories.flatMap((sub) =>
      sub.items.map((item) => ({
        name: item.name,
        category: `${dept.department} — ${sub.title}`,
      }))
    )
  )
}
