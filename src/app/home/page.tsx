import type { Metadata } from "next"
import { HomeClient } from "@/components/home/HomeClient"

export const metadata: Metadata = {
  title: "Jünn",
  description:
    "Crafted renderings that translate architectural vision into compelling visual narratives for investors and buyers.",
}

export default function HomeContent() {
  return <HomeClient />
}
