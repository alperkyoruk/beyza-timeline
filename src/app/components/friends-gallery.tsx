"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card" 
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Image from "next/image"

// Sample friends data with photos and messages
const friends = [
  {
    id: 1,
    name: "Nurseza",
    relationship: "Best Friend",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/nurseza.jpeg",
    photoCaption: "",
    message:
      "Beyzaaa doğum günün kutlu olsunnn❤️❤️iyi ki doğdun iyi ki varsınn. Resmen gözlerimin önünde büyüyüp 21 oldun. Umarım bu yıl da hayatında her istediğin şeyin gerçekleşeceği, unutamıycağın anılar biriktiriceğin bi yıl olur. Seneye beraber girme umuduyla🥳🥳😘😘😘😘. Seni çooook seviyorum❤️",
    color: "from-pink-500 to-red-400",
  },
  {
    id: 2,
    name: "Efe Mert",
    relationship: "Best Friend",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/efemert.jpeg",
    photoCaption: "Wine Tasting",
    message:
      "Today is a fairytale because it’s the day you were born. I don’t know why, but with you, I’d dance in a storm in my best dress, and I hope this year brings you moments just as magical. \n Time won’t fly, it’s like I’m paralyzed by it, but today, let’s celebrate you, the person who makes time feel golden. This night is sparkling, don’t you let it go, because you deserve every bit of love and happiness coming your way.\n Long live all the magic we made, and may this year bring you even more. Happy birthday!",

    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 3,
    name: "Eylül",
    relationship: "Best Friend",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/eylul.jpeg",
    photoCaption: "",
    message:
      "Beyzoşş bebişimmm doğum günün kutluu olsunnn🥳🥳🥳 İnşallah bu sene hayati da diledigin tüm güzellikler seni bulur ve çokkk mutluuu olursunnnn. 💜❤️🥰😘",
    color: "from-purple-500 to-indigo-400",
  },
  {
    id: 4,
    name: "Kerem",
    relationship: "Boss",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/kerem.jpeg",
    photoCaption: "M1",
    message:
      "nice mutlu, huzurlu ve sağlıklı yaşların olsun :)",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 5,
    name: "Arya",
    relationship: "Colleague",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/arya.jpeg",
    photoCaption: "Ofis Günü",
    message:
      "Beyzaa, tatlı balığım, doğum günün kutlu olsun. Umarım beraber daha çok spontane maceralara çıkarız ve oyunlar oynarız. Seviliyorsun 🥳❤️",
    color: "from-yellow-500 to-amber-400",
  },
  {
    id: 6,
    name: "Yağmur",
    relationship: "Best Friend",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/yagmur.jpeg",
    photoCaption: "",
    message:
      "servisten uzanan bir arkadaşlık… seni çook seviyorum kısmi komşum🫶🏻 ne kadar İstanbul’a gittiğinden beri görüşemesek de nice birlikte mutlu yıllara aşkım iyi ki doğmuşsunn😽😽😽",
    color: "from-orange-500 to-red-400",
  },
  {
    id: 7,
    name: "Şevval",
    relationship: "Colleague",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/sevval.jpeg",
    photoCaption: "",
    message:
      "Tahtaları vurup ses kaydetmekten maymun balonla gezmeye kadar giden macera aralığımız yeni yaşında da devam etsinn. İyi ki doğdun müthiş tarza sahip harika şirin insan!😙🩷",
    color: "from-teal-500 to-green-400",
  },
  {
    id: 8,
    name: "Berna",
    relationship: "Housemate",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/berna.jpeg",
    photoCaption: "",
    message:
      "Happy birthday to the best colleague anyone could ask for! Working with you makes even the toughest days brighter. Hope your day is as amazing as you are!",
    color: "from-red-500 to-pink-400",
  },
  {
    id: 9,
    name: "İrem",
    relationship: "Sister",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/irem.jpeg",
    photoCaption: "",
    message:
      "Happy birthday to the best colleague anyone could ask for! Working with you makes even the toughest days brighter. Hope your day is as amazing as you are!",
    color: "from-red-500 to-pink-400",
  },
  {
    id: 10,
    name: "Ece",
    relationship: "Colleague",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/ece.gif.gif",
    photoCaption: "",
    message:
      "Hayatımda olduğun için cidden çok şanslıyım ilerde ben Beyza Abayla çalıstım diye hava atıcam o yüzden keep swiming aşkım sneinle gurur duyuyorum💕",
    color: "from-red-500 to-pink-400",
  },
  
  {
    id: 11,
    name: "Alper",
    relationship: "Manita",
    avatar: "/placeholder.svg?height=80&width=80",
    photo: "/alper.jpeg",
    photoCaption: "New York",
    message:
      "Seninle yeni yaşına girdiğim için çok şanslıyım sevgilimmmm. 20. yaşını geçmek biraz zor olacak ama 21. yaşı daha da süper yapmak için elimden geleni yapacağımmmm. seni çooookkkkkkk seviyorummmmmmmmmm! 💕💕💕💕",
    color: "from-red-500 to-pink-400",
  },
]

export default function FriendsGallery() {
  return (
    <div className="space-y-16">
      {friends.map((friend, index) => (
        <motion.div
          key={friend.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 items-center`}
          >
            {/* Photo */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src={friend.photo || "/placeholder.svg"}
                  alt={friend.photoCaption}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <p className="text-white font-medium">{friend.photoCaption}</p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="w-full md:w-1/2">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-r ${friend.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                      <AvatarImage src={friend.avatar} alt={friend.name} />
                      <AvatarFallback className={`bg-gradient-to-r ${friend.color} text-white`}>
                        {friend.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3
                        className={`text-xl font-bold bg-gradient-to-r ${friend.color} bg-clip-text text-transparent`}
                      >
                        {friend.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{friend.relationship}</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg italic">
                    <p className="text-base leading-relaxed">{friend.message}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

