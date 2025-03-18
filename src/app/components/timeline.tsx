"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import Image from "next/image"
import { GraduationCap, Heart, MapPin, Music, Plane, Baby, Cake, Star } from "lucide-react"

// Sample timeline data - in a real app, this would come from a database or CMS
const timelineEvents = [
  {
    id: 1,
    date: "Mart 18, 2004",
    title: "Antakyaya Güneş Doğdu",
    description: "Dünyaya geldiğin ve dünyayı tamamen değiştirdiğin gün.",
    category: "Life Event",
    icon: <Baby className="h-5 w-5" />,
    images: ["/beyza-bebis.jpeg", "/beyza-bebis-2.jpeg"],
    location: "Antakya, Hatay",
    messages: [
      
    ],
    color: "from-pink-500 to-red-400",
  },
  {
    id: 2,
    date: "Mayıs 2007",
    title: "Biraz Büyüdün",
    description: "Tam çocuk olmaya başladığın dönem.",
    category: "Life Event",
    icon: <Baby className="h-5 w-5" />,
    images: ["/beyza-cocuk.jpeg", "/beyza-cocuk-2.jpeg", "/beyza-cocuk-3.jpeg"],
    location: "Çorlu, Tekirdağ",
    messages: [
      
    ],
    color: "from-blue-500 to-teal-400",
  },
  {
    id: 3,
    date: "Eylül 2020",
    title: "FBO'ya Başladın",
    description: "Seni tanıdığımız ve hayatımıza girdiğin gün.",
    category: "Education",
    icon: <GraduationCap className="h-5 w-5" />,
    images: ["/beyza-fbo.png", "/beyza-fbo-2.jpeg"],
    location: "Çorlu, Tekirdağ",
    messages: [],
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: 4,
    date: "Ağustos 2022",
    title: "Bizim İlk Buluşmalarımız",
    description: "O mistik kafe",
    category: "Relationship",
    icon: <Heart className="h-5 w-5" />,
    images: [
      "/date-baslangic.jpeg", "/date-baslangic-2.jpeg"
    ],
    location: "Çorlu, Tekirdağ",
    messages: [
      
    ],
    color: "from-red-500 to-pink-400",
  },
  {
    id: 5,
    date: "Eylül 2022",
    title: "Üniversiteye Başladın",
    description: "BAU Digital Game Design bölmüne başladın ve sonunda Istanbul'a taşındın.",
    category: "Education",
    icon: <Star className="h-5 w-5" />,
    images: ["/beyza-bau.jpeg", "/beyza-bau-2.jpeg", "/beyza-bau-3.jpeg", "/beyza-bau-4.jpeg"],
    location: "Istanbul, Türkiye",
    messages: [
     
    ],
    color: "from-purple-500 to-indigo-400",
  },
  {
    id: 6,
    date: "Ekim 2022",
    title: "İlk defa Canlı Redd dinledin.",
    description: "Sonunda konserine gittin ve hayatının en güzel günlerinden birini yaşadın.",
    category: "Experience",
    icon: <Music className="h-5 w-5" />,
    images: ["/beyza-redd.jpeg"],
    location: "Kadıköy, Istanbul",
    messages: [
      
    ],
    color: "from-amber-500 to-yellow-400",
  },
  {
    id: 7,
    date: "Yaz 2024",
    title: "Amerika'ya Ufak Bir Ziyaret",
    description: "En iyi yaz tatilin.",
    category: "Travel",
    icon: <MapPin className="h-5 w-5" />,
    images: ["/beyza-amerika.jpeg", "/beyza-amerika-1.jpeg", "/beyza-amerika-2.jpeg", "/beyza-amerika-3.jpeg", "/beyza-amerika-4.jpeg", "/beyza-amerika-5.jpeg", "/beyza-amerika-6.jpeg"],
    location: "Amerika",
    messages: [
      
    ],
    color: "from-cyan-500 to-blue-400",
  },
  
  {
    id: 8,
    date: "Ekim 2024",
    title: "Erasmusla Barcelona Zamanı",
    description: "Barselona maceran ve Avrupa'da geçirdiğin en güzel zamanlar.",
    category: "Travel",
    icon: <Plane className="h-5 w-5" />,
    images: ["/bebis-avrupa.jpeg", "/bebis-avrupa-1.jpeg", "/bebis-avrupa-2.jpeg", "/bebis-avrupa-3.jpeg", "/bebis-avrupa-4.jpeg", "/bebis-avrupa-5.jpeg", "/bebis-avrupa-6.jpeg", "/bebis-avrupa-7.jpeg", "/bebis-avrupa-8.jpeg", "/bebis-avrupa-9.jpeg"],
    location: "Avrupa",
    messages: [{ author: "Ben", content: "Müthiş Gezi" }],
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 9,
    date: "Bugün, 18 Mart 2025",
    title: "Doğum Günün",
    description: "Senin için hazırladığımız bu özel gün.",
    category: "Celebration",
    icon: <Cake className="h-5 w-5" />,
    images: [],
    location: "New York, NY",
    messages: [
      { author: "Herkes", content: "Seni Çok Seviyoruzzzz." },
    ],
    color: "from-pink-500 to-purple-400",
  },
]

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof timelineEvents)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openEventModal = (event: (typeof timelineEvents)[0]) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 rounded-full" />

        {/* Timeline events */}
        <div className="space-y-12 md:space-y-24">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center justify-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r ${event.color} shadow-md z-10`}
              />

              {/* Event card */}
              <div className="w-full md:w-5/12">
                <Card
                  className={`overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer bg-white hover:-translate-y-1`}
                  onClick={() => openEventModal(event)}
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${event.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`rounded-full bg-gradient-to-r ${event.color} p-2 text-white`}>{event.icon}</div>
                      <Badge className={`bg-gradient-to-r ${event.color} text-white border-0`}>{event.category}</Badge>
                      <span className="text-xs text-muted-foreground ml-auto font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event detail modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedEvent && (
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <div className={`h-2 w-full bg-gradient-to-r ${selectedEvent.color} -mt-6 -mx-6 mb-4`} />
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedEvent.title}</DialogTitle>
              <DialogDescription className="flex items-center gap-2">
                <span>{selectedEvent.date}</span>
                <span>•</span>
                <span>{selectedEvent.location}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              <p>{selectedEvent.description}</p>

              {/* Image gallery */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {selectedEvent.images.map((image, i) => (
                  <div key={i} className="relative rounded-lg shadow-md h-[350px]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${selectedEvent.title} image ${i + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>

              {/* Messages */}
              <div className="space-y-3 mt-6">
                <h4 className="text-sm font-semibold">Messages</h4>
                {selectedEvent.messages.map((message, i) => (
                  <div key={i} className="rounded-lg bg-muted p-4">
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">— {message.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

