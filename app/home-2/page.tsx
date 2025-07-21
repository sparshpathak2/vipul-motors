'use client'

import FAQs from "@/components/FAQs";
import HeroCarousel from "@/components/HeroCarousel";
// import LocationPopup from "@/components/LocationPopup";
import { Button } from "@/components/ui/button";
import { IconBrandSpeedtest, IconCar, IconCarSuv, IconEngine, IconGasStation } from "@tabler/icons-react";
import { ArrowRightIcon, ArrowUpRight, Clock, Store, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
            <div className="hidden sm:flex flex-col sm:flex-row w-full h-76 gap-2 group px-16 py-10">
                {/* BOX 1 */}
                <div className="flex-1 overflow-hidden relative transition-all duration-300 group-hover:flex-[1] hover:flex-[1.5]">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                        style={{ backgroundImage: "url('/arena-bg.jpg')" }}
                    ></div>
                    <div
                        // className="absolute h-full inset-0 flex flex-col items-center justify-start p-4 bg-black/50 opacity-0 translate-y-8 hover:opacity-100"
                        className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
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
                        className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
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
                        className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
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
                        className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-4 opacity-0 translate-y-8 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
                    >
                        <div className="h-1/3 flex items-start justify-center w-full">
                            <Image
                                src={"/true-value-logo.png"}
                                width={180}
                                height={180}
                                alt="Arena Logo"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-center px-2">
                            {/* <p className="text-white text-lg font-semibold">TRUE VALUE</p> */}
                            <p className="text-white font-medium">Get the right proce for your at India's leading destination for pre-owned cars.</p>
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

            {/* Service Section */}
            <div className="grid grid-cols-8 grid-rows-4 gap-2 px-2 sm:px-16 h-[400px]">

                {/* <div className="col-span-4 row-span-4 relative p-4">
          Background Image
          <div className="absolute inset-0 bg-[url('/channel-parter-bg.avif')] bg-cover bg-center z-0" />

          Gradient Overlay
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-slate-800/60 z-10" />

          Content Layer
          <div className="relative z-20 flex flex-col justify-between h-full text-white">
            Title & Description
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Channel Partners</div>
              <div>Buy or sell – always get the very best with Maruti Suzuki</div>
            </div>

            Buttons
            <div className="grid grid-cols-4 gap-3">
              {['NEXA', 'ARENA', 'COMMERCIAL', 'TRUE VALUE'].map((label) => (
                <div
                  key={label}
                  className="relative overflow-hidden cursor-pointer group bg-white w-full"
                >
                  <div className="flex flex-col gap-2 py-2 px-4 font-semibold relative z-10 text-black transition-colors duration-300 group-hover:text-white">
                    {label}
                    <div className="flex w-full justify-end">
                      <ArrowUpRight className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
                </div>
              ))}
            </div>
          </div>
        </div> */}

                <div className="col-span-4 row-span-4 relative p-4">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[url('/channel-partner-bg-2.jpg')] bg-cover bg-center z-0" />

                    {/* Gradient Overlay */}
                    {/* <div className="absolute inset-0 bg-black/50" /> */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-slate-800/90 z-10" />


                    {/* Content Layer */}
                    <div className="relative z-20 flex flex-col justify-end h-full text-white">
                        {/* Title & Description */}
                        {/* <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Channel Partners</div>
              <div>Buy or sell – always get the very best with Maruti Suzuki</div>
            </div> */}

                        {/* Glass Effect Wrapper */}
                        <div className="flex flex-col gap-8 bg-white/10 backdrop-blur-sm p-4 shadow-md">
                            <div className="flex flex-col gap-1">
                                <div className="text-2xl font-semibold">Channel Partners</div>
                                <div>Buy or sell – always get the very best with Maruti Suzuki</div>
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {['ARENA', 'NEXA', 'COMMERCIAL', 'TRUE VALUE'].map((label) => (
                                    <div
                                        key={label}
                                        className="relative overflow-hidden cursor-pointer group bg-white/80"
                                    >
                                        <div className="flex flex-col gap-2 py-2 px-4 font-semibold relative z-10 text-black transition-colors duration-300 group-hover:text-white">
                                            {label}
                                            <div className="flex w-full justify-end">
                                                <ArrowUpRight className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="relative col-span-4 row-span-2 col-start-5 bg-slate-200">

          <div className="absolute inset-0 bg-[url('/test-drive-1.jpg')] bg-cover bg-center z-0" />

          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute flex flex-col justify-between p-4 h-full">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold text-white">Book a Test Drive</div>
              <div className="text-white">Experience your favorite Maruti Suzuki car firsthand with a hassle-free test drive at your convenience.</div>
            </div>
            <div className="relative overflow-hidden w-fit cursor-pointer group bg-white/80">
              <div className="flex gap-2 py-2 px-4 font-semibold relative z-10 text-black transition-colors duration-300 group-hover:text-white">
                Book a Test Drive
                <div className="flex">
                  <ArrowUpRight className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
            </div>
          </div>

        </div> */}

                <div className="relative col-span-4 row-span-2 col-start-5 bg-slate-200 group cursor-pointer overflow-hidden">

                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[url('/test-drive-1.jpg')] bg-cover bg-center z-0" />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/80 z-10" />

                    {/* Hover slide-in effect (blue overlay) */}
                    <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-20 opacity-80" />

                    {/* Content */}
                    <div className="absolute flex flex-col justify-between p-4 h-full z-30">
                        <div className="flex flex-col gap-2">
                            <div className="text-2xl font-semibold text-white">Book a Test Drive</div>
                            <div className="text-white">
                                Experience your favorite Maruti Suzuki car firsthand with a hassle-free test drive at your convenience.
                            </div>
                        </div>

                        {/* Arrow + CTA */}
                        <div className="flex justify-end items-center gap-2 text-white font-semibold">
                            {/* Book a Test Drive */}
                            <ArrowUpRight size={32} className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                    </div>
                </div>


                {/* <div className="relative flex flex-col col-span-2 row-span-2 col-start-5 row-start-3 bg-slate-200 p-2">
          <div className="absolute flex flex-col gap-2">
            <div className="text-2xl font-semibold">Book Service</div>
            <div>Keep your car in top condition with easy online service booking at your nearest Maruti Suzuki workshop.</div>

            <div className="flex justify-end items-center gap-2 font-semibold mt-4">
              Book a Test Drive
              <ArrowUpRight className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

        </div> */}

                <div className="relative flex flex-col col-span-2 row-span-2 col-start-5 row-start-3 cursor-pointer group overflow-hidden bg-slate-300 p-4">
                    {/* Content */}
                    <div className="z-10 text-black flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-2">
                            <div className="text-2xl font-semibold">Book Service</div>
                            <div>Keep your car in top condition with easy online service booking at your nearest Maruti Suzuki workshop.</div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-end items-center gap-2 font-semibold">
                            <ArrowUpRight size={32} className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col col-span-2 row-span-2 col-start-7 row-start-3 cursor-pointer group overflow-hidden bg-black p-4">
                    {/* Content */}
                    <div className="z-10 flex flex-col justify-between h-full text-white">
                        <div className="flex flex-col gap-2">
                            <div className="text-2xl font-semibold">Roadside Assistance</div>
                            <div>Get 24x7 on-road support across India for breakdowns, towing, and emergency help.</div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-end items-center gap-2 text-white font-semibold">
                            <ArrowUpRight size={32} className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                    </div>
                </div>



                <div className="col-span-2 row-span-2 col-start-7 row-start-3 bg-slate-200">5</div>

            </div>

            {/* Features Section */}
            <div className="flex bg-white justify-center items-center gap-16 py-16">

                <div className="">
                    <div className="grid grid-cols-6 grid-rows-6 gap-1 h-[540px] max-w-[540px] min-w-[540px]">
                        <div className="col-span-4 row-span-2 bg-slate-200">
                            <Image
                                width={400}
                                height={400}
                                alt='anniversary'
                                src={'/grid-1.jpg'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-2 row-span-2 col-start-3 row-start-3">
                            <Image
                                width={400}
                                height={400}
                                alt='anniversary'
                                src={'/anniversary.png'}
                                className="w-full h-full p-2"
                            />
                        </div>
                        <div className="col-span-2 row-span-4 col-start-5 row-start-1 bg-slate-200">
                            <Image
                                width={400}
                                height={400}
                                alt='anniversary'
                                src={'/grid-2.jpg'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-4 row-span-2 col-start-3 row-start-5 bg-slate-200">
                            <Image
                                width={400}
                                height={400}
                                alt='anniversary'
                                src={'/grid-3.jpg'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-2 row-span-4 col-start-1 row-start-3 bg-slate-200">
                            <Image
                                width={400}
                                height={400}
                                alt='anniversary'
                                src={'/grid-4.jpg'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="w-full flex flex-col items-center justify-center gap-8">

                        {/* <hr className="my-6 border-t border-red-600 w-24" /> */}
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col gap-2">
                                <div className="text-3xl font-semibold">Welcome to Vipul Maruti!</div>
                                <div className="font-semibold">DRIVEN BY TRUST. DEFINED  BY EXCELLENCE.</div>
                            </div>
                            {/* <div className="text-gray-600 sm:pr-20">At Vipul, we believe that our relationship doesn’t end with getting you a new car. Its just the beginning of a long relationship which will need constant support and quality experience.</div> */}
                        </div>

                        <div className="flex flex-col gap-6 w-full">

                            <div className="flex gap-4">
                                <div className="py-1.5">
                                    <Users size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold">50 Lakhs+ Happy Customers</div>
                                    <div>Serving 1000s of customers across multiple states</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="py-1">
                                    <IconCar size={26} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold">16 Arena Showrooms</div>
                                    <div>Serving 1000s of customers across multiple states</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="py-1">
                                    <IconCarSuv size={28} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold">8 Nexa Showrooms</div>
                                    <div>Serving 1000s of customers across multiple states</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="py-1">
                                    <Store size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold">19 Workshops</div>
                                    <div>Serving 1000s of customers across multiple states</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* Models Section */}
            <div className="flex flex-col w-full px-2 sm:px-16 py-24 gap-12">

                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold text-3xl">Explore Models</div>
                        <div>Lorem ipsum dolor sit amet consectetur. In amet risus mi risus habitant porttitor tincidunt.</div>
                    </div>

                    <Button>
                        Explore All
                        <ArrowRightIcon />
                    </Button>
                </div>

                <div className="grid grid-cols-4 gap-4">

                    <div className="flex flex-col gap-2 border border-gray-200 rounded-md">
                        <div className="h-[160px] flex items-center justify-center rounded-t-md bg-white">
                            <Image
                                width={400}
                                height={400}
                                alt="anniversary"
                                src="/fronx-2.webp"
                                className="h-[160px] object-contain mx-auto"
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <div className="flex flex-col gap-2 px-3">
                                <div className="text-[20px] font-semibold">Maruti Suzuki Fronx</div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <div className="flex items-center gap-2">
                                        <IconEngine size={24} />
                                        <div>1197 CC</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconGasStation size={24} />
                                        <div>18 KM/L</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconBrandSpeedtest size={22} />
                                        <div>80 BHP</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 py-2 px-2">
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 border border-gray-200 rounded-md">
                        <div className="h-[160px] flex items-center justify-center rounded-t-md bg-white">
                            <Image
                                width={400}
                                height={400}
                                alt="anniversary"
                                src="/grand-vitara-2.png"
                                className="h-[160px] object-contain mx-auto"
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <div className="flex flex-col gap-2 px-3">
                                <div className="text-[20px] font-semibold">Grand Vitara</div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <div className="flex items-center gap-2">
                                        <IconEngine size={24} />
                                        <div>1197 CC</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconGasStation size={24} />
                                        <div>18 KM/L</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconBrandSpeedtest size={22} />
                                        <div>80 BHP</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 py-2 px-2">
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 border border-gray-200 rounded-md">
                        <div className="h-[160px] flex items-center justify-center rounded-t-md bg-white">
                            <Image
                                width={400}
                                height={400}
                                alt="anniversary"
                                src="/dzire-2.webp"
                                className="h-[160px] object-contain mx-auto"
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <div className="flex flex-col gap-2 px-3">
                                <div className="text-[20px] font-semibold">Maruti Suzuki Dzire</div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <div className="flex items-center gap-2">
                                        <IconEngine size={24} />
                                        <div>1197 CC</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconGasStation size={24} />
                                        <div>18 KM/L</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconBrandSpeedtest size={22} />
                                        <div>80 BHP</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 py-2 px-2">
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 border border-gray-200 rounded-md">
                        <div className="h-[160px] flex items-center justify-center rounded-t-md bg-white">
                            <Image
                                width={400}
                                height={400}
                                alt="anniversary"
                                src="/ertiga-2.webp"
                                className="h-[160px] object-contain mx-auto"
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <div className="flex flex-col gap-2 px-3">
                                <div className="text-[20px] font-semibold">Maruti Suzuki Ertiga</div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <div className="flex items-center gap-2">
                                        <IconEngine size={24} />
                                        <div>1197 CC</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconGasStation size={24} />
                                        <div>18 KM/L</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconBrandSpeedtest size={22} />
                                        <div>80 BHP</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 py-2 px-2">
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex bg-white mx-16">

                <div className="w-2/5 h-[440px]">
                    <Image
                        width={400}
                        height={400}
                        alt='anniversary'
                        src={'/grid-1.jpg'}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex w-3/5 flex-col gap-2 px-12 py-8 justify-between">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-semibold">About Us</h2>
                        <div className="flex flex-col gap-2">
                            <div>
                                Vipul Motors – Driven by Trust, Defined by Service
                            </div>
                            <div>
                                Established in 1987, Vipul Motors is a leading and trusted dealership of Maruti Suzuki, known for delivering outstanding customer experiences across every touchpoint. With a legacy of over three decades, we have built our reputation on the pillars of honesty, commitment, and customer-first thinking.
                            </div>
                            <div>
                                Our growing footprint includes 19 showrooms and 30 workshops strategically located across Delhi, Noida, Gurgaon, Faridabad, Jaipur, Dausa, and Bikaner. We proudly represent the full Maruti Suzuki portfolio—Arena, Nexa, True Value, and Service—ensuring that every customer finds the right car and continued care throughout their ownership journey.
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button className="w-fit">
                            Read more
                            <ArrowRightIcon />
                        </Button>
                    </div>
                </div>

            </div>

            <div className="flex flex-col w-full text-center py-30 gap-8">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
                    <div>We promise you the best of our service.</div>
                </div>
                <FAQs />
            </div>

        </div>
    );
}
