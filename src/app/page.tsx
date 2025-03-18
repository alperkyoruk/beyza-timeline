import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "./components/ui/button"
import Timeline from "./components/timeline"
import FriendsGallery from "./components/friends-gallery"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-pink-200">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Senin Hikayen
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#timeline" className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors">
              Timeline
            </Link>
            <Link href="#friends" className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors">
              Arkadaşlar
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-pink-100 via-purple-50 to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Doğum Günün Kutlu Olsun,{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Beyza
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-pink-700 md:text-xl">
                  Bu senin hikayen
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0">
                  <Link href="#timeline">Explore Timeline</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-pink-500" />
          </div>
        </section>

        <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Hayat Yolculuğun
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-700 md:text-xl">
                  Elimde olduğu kadar hayatından kesitler
                </p>
              </div>
            </div>
            <div className="mt-16">
              <Timeline />
            </div>
          </div>
        </section>

        <section id="friends" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-pink-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                  Friends & Memories
                </h2>
                <p className="mx-auto max-w-[700px] text-pink-700 md:text-xl">
                  Special moments and messages from the people who love you.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <FriendsGallery />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-pink-200 bg-white py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-center text-sm text-pink-600 md:text-left">Made with ❤️ for your special day</p>
          <p className="text-center text-sm text-pink-600 md:text-right">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

