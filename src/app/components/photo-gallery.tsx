"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "./ui/dialog"
import { MapPin, Calendar } from "lucide-react"

// Sample photos data - in a real app, this would come from a database or CMS
const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Birthday celebration",
    date: "May 15, 2022",
    location: "New York, NY",
    description: "Celebrating your last birthday with friends at that amazing rooftop restaurant.",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Beach vacation",
    date: "July 2021",
    location: "Maui, Hawaii",
    description: "That perfect sunset on our Hawaii trip. You said it was the most beautiful thing you'd ever seen.",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Hiking adventure",
    date: "September 2021",
    location: "Yosemite National Park",
    description: "The day we hiked to the top of Half Dome. Your face when we reached the summit was priceless!",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Concert night",
    date: "November 2021",
    location: "Madison Square Garden, NY",
    description: "Front row at your favorite band's concert. You didn't stop dancing all night!",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Family reunion",
    date: "December 2021",
    location: "San Francisco, CA",
    description: "The whole family together for the holidays. Three generations in one photo!",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Cooking class",
    date: "February 2022",
    location: "Little Italy, NY",
    description: "That Italian cooking class where you made the perfect pasta from scratch.",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Road trip",
    date: "March 2022",
    location: "Route 66",
    description: "Halfway through our epic road trip. This was at that quirky diner with the amazing milkshakes.",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Art exhibition",
    date: "April 2022",
    location: "MoMA, NY",
    description: "Your face lit up when you saw your favorite painting in person for the first time.",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Picnic in the park",
    date: "May 2022",
    location: "Central Park, NY",
    description: "That perfect spring day when we had a picnic and read books until sunset.",
  },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPhotoModal = (photo: (typeof photos)[0]) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
            onClick={() => openPhotoModal(photo)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <p className="font-medium text-sm">{photo.alt}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span className="text-xs">{photo.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Photo detail modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedPhoto && (
          <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{selectedPhoto.alt}</h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPhoto.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{selectedPhoto.location}</span>
                </div>
              </div>
              <p className="mt-4">{selectedPhoto.description}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

