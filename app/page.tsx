'use client'

import HeroCarousel from "@/components/HeroCarousel";
// import LocationPopup from "@/components/LocationPopup";
import LocationPopup from "@/components/LocationPopup2";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react"

export default function Home() {

  const router = useRouter()
  // Called when user confirms location in the popup
  // const handleLocationConfirmed = useCallback(() => {
  //   const userCity = "mumbai" // Replace with logic for actual detection
  //   router.push(`/dealer/${userCity}`)
  // }, [router])

  return (
    <div className="flex w-full flex-col">
      {/* <LocationPopup onConfirm={handleLocationConfirmed} /> */}
      {/* <LocationPopup /> */}
      <HeroCarousel />

      {/* Service Types Desktop */}
      <div className="hidden sm:flex flex-col sm:flex-row w-full h-64 gap-2 group p-2">
        {/* BOX 1 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/arena-bg.jpg')" }}
          ></div>
          <div
            // className="absolute h-full inset-0 flex flex-col items-center justify-start p-4 bg-black/50 opacity-0 translate-y-8 hover:opacity-100"
            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
          >
            <div className="h-1/2 flex items-center justify-center w-full">
              <Image
                src={"/arena-logo.webp"}
                width={360}
                height={360}
                alt="Arena Logo"
              />
            </div>
            <div className="h-1/2 flex flex-col gap-2 text-center px-2">
              {/* <p className="text-white text-lg font-semibold">ARENA</p> */}
              <p className="text-white font-medium">Explore the 'World of Arena' built on experience, technology & design.</p>
            </div>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/nexa-bg.webp')" }}
          ></div>
          <div
            // className="absolute h-full inset-0 flex flex-col items-center justify-start p-4 bg-black/50 opacity-0 translate-y-8 hover:opacity-100"
            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
          >
            <div className="h-1/2 flex items-center justify-center w-full">
              <Image
                src={"/nexa-logo.png"}
                width={200}
                height={200}
                alt="Arena Logo"
              />
            </div>
            <div className="h-1/2 flex flex-col gap-2 text-center px-2">
              {/* <p className="text-white text-lg font-semibold">NEXA</p> */}
              <p className="text-white font-medium">Indulge in the premium experience of innovation & extraordinary creation that's created to inspire.</p>
            </div>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/commercial-bg.webp')" }}
          ></div>
          <div
            // className="absolute h-full inset-0 flex flex-col items-center justify-start p-4 bg-black/50 opacity-0 translate-y-8 hover:opacity-100"
            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
          >
            <div className="h-1/2 flex items-center justify-center w-full">
              <Image
                src={"/commercial-logo.webp"}
                width={360}
                height={360}
                alt="Arena Logo"
              />
            </div>
            <div className="h-1/2 flex flex-col gap-2 text-center px-2">
              {/* <p className="text-white text-lg font-semibold">COMMERCIAL</p> */}
              <p className="text-white font-medium">Explore the 'World of Arena' built on experience, technology & design.</p>
            </div>
          </div>
        </div>

        {/* BOX 4 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/true-value-bg.jpeg')" }}
          ></div>
          <div
            // className="absolute h-full inset-0 flex flex-col items-center justify-start p-4 bg-black/50 opacity-0 translate-y-8 hover:opacity-100"
            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
          >
            <div className="h-1/2 flex items-center justify-center w-full">
              <Image
                src={"/true-value-logo.png"}
                width={240}
                height={240}
                alt="Arena Logo"
              />
            </div>
            <div className="flex flex-col gap-2 text-center px-2">
              {/* <p className="text-white text-lg font-semibold">TRUE VALUE</p> */}
              <p className="text-white font-medium">Leading destination for pre-owned cars.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Types Mobile */}
      <div className="flex sm:hidden flex-col sm:flex-row w-full h-200 gap-2 group p-2">
        {/* BOX 1 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/arena-bg.jpg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-100"
          >
            <div className="h-1/2 flex items-center justify-center w-full">
              <Image
                src={"/arena-logo.webp"}
                width={100}
                height={100}
                alt="Arena Logo"
                className="w-72 h-auto"
              />
            </div>
            <div className="h-2/3 flex flex-col gap-1 text-center justify-center px-2">
              <p className="text-white font-semibold">ARENA</p>
              <p className="text-white font-medium">Explore the 'World of Arena' built on experience, technology & design.</p>
            </div>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/nexa-bg.webp')" }}
          ></div>
          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-100"
          >
            <div className="h-1/3 flex items-center justify-center w-full">
              <Image
                src={"/nexa-logo.png"}
                width={100}
                height={100}
                alt="Arena Logo"
                className="w-36 h-auto"
              />
            </div>
            <div className="h-2/3 flex flex-col gap-1 text-center justify-center px-2">
              <p className="text-white font-semibold">NEXA</p>
              <p className="text-white font-medium">Indulge in the premium experience of innovation & extraordinary creation that's created to inspire.</p>
            </div>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/commercial-bg.webp')" }}
          ></div>
          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-100"
          >
            <div className="h-1/3 flex items-center justify-center w-full">
              <Image
                src={"/commercial-logo.webp"}
                width={100}
                height={100}
                alt="Arena Logo"
                className="w-72 h-auto"
              />
            </div>
            <div className="h-2/3 flex flex-col gap-1 text-center justify-center px-2">
              <p className="text-white font-semibold">COMMERCIAL</p>
              <p className="text-white font-medium">Explore the 'World of Arena' built on experience, technology & design.</p>
            </div>
          </div>
        </div>

        {/* BOX 4 */}
        <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: "url('/true-value-bg.jpeg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-100"
          >
            <div className="h-1/3 flex items-center justify-center w-full">
              <Image
                src={"/true-value-logo.png"}
                width={100}
                height={100}
                alt="Arena Logo"
                className="w-48 h-auto"
              />
            </div>
            <div className="h-2/3 flex flex-col gap-1 text-center justify-center px-2">
              <p className="text-white font-semibold">TRUE VALUE</p>
              <p className="text-white font-medium">Leading destination for pre-owned cars.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row w-full px-4 sm:px-40 py-8 sm:py-20 gap-8 sm:gap-0">

        <div className="flex flex-col w-full sm:w-2/5 gap-2">

          <hr className="my-6 border-t border-red-600 w-24" />
          <div className="flex flex-col gap-4">
            {/* <div className="text-3xl">WELCOME TO VIPUL MARUTI!</div> */}
            <div className="flex flex-col gap-2">
              <div className="text-3xl">Welcome to Vipul Maruti!</div>
              <div className="text-red-600">DRIVEN BY TRUST. DEFINED  BY EXCELLENCE.</div>
            </div>
            <div className="text-gray-600 sm:pr-20">At Vipul, we believe that our relationship doesn’t end with getting you a new car. Its just the beginning of a long relationship which will need constant support and quality experience.</div>
          </div>

        </div>

        <div className="w-full sm:w-3/5 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6">

            <div className="flex flex-col gap-2">
              <div className="border border-red-600 rounded-md p-2 w-fit">
                <Clock size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">50 Lakhs+ Happy Customers</div>
                <div>Serving 1000s of customers across multiple states</div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-red-600 rounded-md p-2 w-fit">
                <Clock size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">16 Arena Showrooms</div>
                <div>Serving 1000s of customers across multiple states</div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-red-600 rounded-md p-2 w-fit">
                <Clock size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">8 Nexa Showrooms</div>
                <div>Serving 1000s of customers across multiple states</div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-red-600 rounded-md p-2 w-fit">
                <Clock size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">19 Workshops</div>
                <div>Serving 1000s of customers across multiple states</div>
              </div>
            </div>

          </div>
        </div>

        {/* <div className="w-1/2 flex items-center justify-center">
          <Image
            src={"/welcome-image.png"}
            width={100}
            height={100}
            alt="Welcome to Vipul Motors"
            className="h-72 w-full object-contain"
          />
        </div> */}

      </div>

      <div className="flex flex-col gap-2 items-center text-center w-[80%] mx-auto py-8">

        <div className="flex flex-col gap-2">
          <div className="text-3xl">About Us</div>
          <div>
            Vipul Motors – Driven by Trust, Defined by Service
          </div>
        </div>

        <div>
          Established in 1987, Vipul Motors is a leading and trusted dealership of Maruti Suzuki, known for delivering outstanding customer experiences across every touchpoint. With a legacy of over three decades, we have built our reputation on the pillars of honesty, commitment, and customer-first thinking.
        </div>
        <div>
          Our growing footprint includes 19 showrooms and 30 workshops strategically located across Delhi, Noida, Gurgaon, Faridabad, Jaipur, Dausa, and Bikaner. We proudly represent the full Maruti Suzuki portfolio—Arena, Nexa, True Value, and Service—ensuring that every customer finds the right car and continued care throughout their ownership journey.
        </div>

        <Button className="my-6">Read more</Button>

        {/* <div>
          At Vipul Motors, customer satisfaction is at the core of everything we do. From personalized consultations and hassle-free buying processes to prompt after-sales support and efficient servicing, we go the extra mile to make car ownership truly joyful and worry-free.
        </div>
        <div>
          Our strength lies in our dedicated team of professionals who treat every customer like family—listening, advising, and supporting with empathy and accountability. Over the years, our unwavering focus on building lasting relationships has earned us the trust of thousands of happy customers.
        </div>
        <div>
          We believe that buying a car is not just a transaction—it’s a relationship. And at Vipul Motors, that relationship begins with trust and grows through exceptional service.
        </div> */}

      </div>

    </div>
  );
}
