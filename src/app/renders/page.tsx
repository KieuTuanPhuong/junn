import type { Metadata } from "next"
import RenderPageContent from "./components/RenderPageContent"

export const metadata: Metadata = {
  title: "Renders | Jünn",
  description:
    "Crafted renderings that translate architectural vision into compelling visual narratives for investors and buyers.",
}

export default function RendersPage() {
  return <RenderPageContent />
}
