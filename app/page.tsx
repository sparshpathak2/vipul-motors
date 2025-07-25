'use client'

import FAQs from "@/components/FAQs";
import HeroCarousel from "@/components/HeroCarousel";
import Testimonials from "@/components/Testimonials";
// import LocationPopup from "@/components/LocationPopup";
import { Button } from "@/components/ui/button";
import { models } from "@/lib/data";
import { IconBrandSpeedtest, IconCar, IconCarSuv, IconEngine, IconGasStation } from "@tabler/icons-react";
import { ArrowRightIcon, ArrowUpRight, Clock, MapPin, Store, Users } from "lucide-react";
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

      {/* Service Section */}
      <div className="grid grid-cols-2 sm:grid-cols-8 grid-rows-6 sm:grid-rows-4 gap-2 p-3 sm:px-16 sm:py-12">

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

        {/* 1 */}
        <div className="col-span-2 row-span-2 sm:col-span-4 sm:row-span-4 relative p-4">
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
            <div className="flex flex-col gap-8 bg-white/10 backdrop-blur-sm p-2 sm:p-4 shadow-md">
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-semibold">Channel Partners</div>
                <div>Buy or sell – always get the very best with Maruti Suzuki</div>
              </div>
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
              </div> */}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'ARENA', href: '/models?outlet=arena' },
                  { label: 'NEXA', href: '/models?outlet=nexa' },
                  { label: 'COMMERCIAL', href: '/models?outlet=commercial' },
                  { label: 'TRUE VALUE', href: '/true-value' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="relative overflow-hidden group bg-blue-600 sm:bg-white/80 cursor-pointer block"
                  >
                    <div className="flex flex-col gap-2 py-2 px-4 font-semibold relative z-10 text-white sm:text-black sm:group-hover:text-white transition-colors duration-300">
                      {label}
                      <div className="flex w-full justify-end">
                        <ArrowUpRight className="transition-transform duration-300 transform sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1" />
                      </div>
                    </div>
                    <div className="hidden sm:block absolute inset-0 bg-blue-600 transform -translate-x-full sm:group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* 2 */}
        <a
          href="/service"
          className="relative flex flex-col row-span-2 row-start-3 sm:col-span-2 sm:row-span-2 sm:col-start-5 cursor-pointer group overflow-hidden bg-slate-300 p-4"
        >
          {/* Content */}
          <div className="z-10 text-black flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Book Service</div>
              <div className="text-sm sm:text-md">Keep your car in top condition with easy online service booking at your nearest Maruti Suzuki workshop.</div>
            </div>

            {/* Arrow */}
            <div className="flex justify-end items-center gap-2 font-semibold">
              <ArrowUpRight size={32} className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </a>

        {/* 3 */}
        <a
          href="/roadside-assistance"
          className="relative flex flex-col row-span-2 row-start-3 sm:col-span-2 sm:row-span-2 sm:col-start-7 cursor-pointer group overflow-hidden bg-black p-4"
        >
          {/* Content */}
          <div className="z-10 flex flex-col justify-between h-full text-white">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Roadside Assistance</div>
              <div className="text-sm sm:text-md">Get 24x7 on-road support across India for breakdowns, towing, and emergency help.</div>
            </div>

            {/* Arrow */}
            <div className="flex justify-end items-center gap-2 text-white font-semibold">
              <ArrowUpRight size={32} className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </a>

        {/* 4 */}
        {/* <div className="relative col-span-2 row-span-2 row-start-5 sm:row-span-2 sm:row-start-3 sm:col-start-5 bg-slate-200 group cursor-pointer overflow-hidden"> */}
        <a
          href="/book-test-drive"
          className="relative col-span-2 row-span-2 row-start-5 sm:col-span-4 sm:row-span-2 sm:col-start-5 sm:row-start-3 bg-slate-200 group cursor-pointer overflow-hidden"
        >

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
        </a>

      </div>

      {/* Features Section */}
      <div className="flex flex-col sm:flex-row bg-white justify-center items-center gap-16 sm:py-16 px-4 sm:px-30 py-8 w-full">

        <div className="hidden sm:block">
          <div className="grid grid-cols-6 grid-rows-6 gap-1 sm:h-[540px] max-w-[540px] min-w-[540px]">
            <div className="col-span-4 row-span-2 bg-slate-200">
              <Image
                width={400}
                height={400}
                alt='anniversary'
                // src={'/grid-1.jpg'}
                src={'/vipul-motors-gallery-10.webp'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-3">
              <Image
                width={400}
                height={400}
                alt='anniversary'
                // src={'/anniversary.png'}
                src={'/35-years-of-excellence-4.png'}
                className="w-full h-full p-2"
              />
            </div>
            <div className="col-span-2 row-span-4 col-start-5 row-start-1 bg-slate-200">
              <Image
                width={400}
                height={400}
                alt='anniversary'
                // src={'/grid-2.jpg'}
                src={'/vipul-motors-gallery-4.webp'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 row-span-2 col-start-3 row-start-5 bg-slate-200">
              <Image
                width={400}
                height={400}
                alt='anniversary'
                // src={'/grid-3.jpg'}
                src={'/vipul-motors-gallery-2.webp'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-4 col-start-1 row-start-3 bg-slate-200">
              <Image
                width={400}
                height={400}
                alt='anniversary'
                // src={'/grid-4.jpg'}
                src={'/vipul-motors-gallery-8.webp'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-8">

          {/* <hr className="my-6 border-t border-red-600 w-24" /> */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold">Welcome to <span className="text-blue-600">Vipul Motors!</span></h2>
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
                <div>Trusted by over 50 lakh satisfied customers across the country.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="py-1">
                <IconCar size={26} />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">16 Arena Showrooms</div>
                <div>Widespread presence with 16 Arena showrooms to serve you better.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="py-1">
                <IconCarSuv size={28} />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">8 Nexa Showrooms</div>
                <div>Experience premium car buying at our 8 exclusive NEXA showrooms.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="py-1">
                <Store size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">19 Workshops</div>
                <div>Get expert care and service at our 19 authorized workshops.</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Models Section */}
      <div className="flex flex-col w-full px-4 py-12 sm:px-16 sm:py-24 gap-6 sm:gap-12">

        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-3xl">Explore Models</h2>
            <div>Lorem ipsum dolor sit amet consectetur. In amet risus mi risus habitant porttitor tincidunt.</div>
          </div>

          <a href="/models" className="group flex gap-2 items-center border-1 bg-blue-600 hover:bg-blue-800 text-white w-fit h-fit px-4 py-3">
            <div className="text-sm">Explore All</div>
            <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-1 gap-4">

          <div className="flex flex-col gap-2 border border-gray-200">
            <div className="h-[160px] flex items-center justify-center bg-white">
              <Image
                width={400}
                height={400}
                alt="anniversary"
                src="/fronx-2.webp"
                className="h-[140px] object-contain mx-auto"
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
                {/* <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button> */}
                {/* <Button className="flex-1 min-w-0 truncate">Get Brochure</Button> */}
                <a
                  href="/models/Fronx-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 truncate"
                >
                  <Button className="w-full">Get Brochure</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border border-gray-200">
            <div className="h-[160px] flex items-center justify-center bg-white">
              <Image
                width={400}
                height={400}
                alt="anniversary"
                src="/grand-vitara-2.png"
                className="h-[140px] object-contain mx-auto"
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
                {/* <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button> */}
                {/* <Button className="flex-1 min-w-0 truncate">Get Brochure</Button> */}
                <a
                  href="/models/Grand-Vitara-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 truncate"
                >
                  <Button className="w-full">Get Brochure</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border border-gray-200">
            <div className="h-[160px] flex items-center justify-center bg-white">
              <Image
                width={400}
                height={400}
                alt="anniversary"
                src="/dzire-2.webp"
                className="h-[140px] object-contain mx-auto"
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
                {/* <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button> */}
                {/* <Button className="flex-1 min-w-0 truncate">Get Brochure</Button> */}
                <a
                  href="/models/Dzire-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 truncate"
                >
                  <Button className="w-full">Get Brochure</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border border-gray-200">
            <div className="h-[160px] flex items-center justify-center bg-white">
              <Image
                width={400}
                height={400}
                alt="anniversary"
                src="/ertiga-2.webp"
                className="h-[140px] object-contain mx-auto"
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
                {/* <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button> */}
                {/* <Button className="flex-1 min-w-0 truncate">Get Brochure</Button> */}
                <a
                  href="/models/Ertiga-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 truncate"
                >
                  <Button className="w-full">Get Brochure</Button>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1280px] px-4 sm:px-16 py-4'>
          {
            models.slice(0, 4).map((model, index) => (
              <div key={index} className="flex flex-col gap-2 border border-gray-200">
                <div className="h-[160px] flex items-center justify-center bg-white">
                  <Image
                    width={400}
                    height={400}
                    alt="anniversary"
                    src="/fronx-2.webp"
                    className="h-[140px] object-contain mx-auto"
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <div className="flex flex-col gap-2 px-3">
                    <div className="text-[20px] font-semibold">{model?.name}</div>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-2">
                        <IconEngine size={24} />
                        <div>{model?.displacement}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconGasStation size={24} />
                        <div>{model?.fuelEfficiency}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconBrandSpeedtest size={22} />
                        <div>{model?.power}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 py-2 px-2">
                    <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                    <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
                  </div>
                </div>
              </div>
            ))}
        </div> */}

      </div>

      {/* About Section */}
      <div className="flex flex-col sm:flex-row bg-white mx-4 sm:mx-16 my-4">

        <div className="w-full sm:w-2/5 h-[240px] sm:h-[440px]">
          <Image
            width={400}
            height={400}
            alt='anniversary'
            src={'/grid-1.jpg'}
            className="w-full h-[240px] sm:h-full object-cover"
          />
        </div>

        <div className="flex w-full sm:w-3/5 flex-col gap-4 p-4 sm:px-12 sm:py-8 justify-between">
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
          <div className="flex sm:justify-end">
            <Button className="w-fit">
              Read more
              <ArrowRightIcon />
            </Button>
          </div>
        </div>

      </div>

      {/* FAQs Section */}
      <div className="flex flex-col w-full text-center px-4 sm:px-16 py-12 sm:py-24 gap-8">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          <div>We promise you the best of our service.</div>
        </div>
        <FAQs />
      </div>

      {/* Testimonials Section */}
      <div className="w-full px-4 py-12 sm:px-16 sm:py-24 bg-white">
        <Testimonials />
      </div>

      {/* Locate Showrooms Section */}
      <div className="flex bg-black py-8 px-4 sm:px-16 sm:py-24">
        <div className="flex flex-col gap-8 w-full text-white">

          <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl sm:text-4xl font-semibold">Locate Your Nearest Showroom</h2>
              {/* <div>Lorem ipsum dolor sit amet consectetur.</div> */}
            </div>
            <a href="/outlets" className="group flex gap-2 items-center border-1 border-white w-fit py-3 px-4">
              <div className="text-sm">Explore Showrooms</div>
              <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <hr className="hidden sm:block w-full border-t border-white" />

          <div className="flex flex-col sm:flex-row w-full gap-4">

            <div className="w-full sm:w-1/3 flex flex-col gap-4">

              <a
                href="/your-destination-url"
                className="group flex gap-4 border border-white p-4 transition duration-200 cursor-pointer"
              >
                {/* Optional Left Image or Icon */}
                {/* <div className="bg-slate-200 w-[140px] h-full"></div> */}

                <div className="flex flex-col gap-2 sm:gap-8 w-full">
                  <div className="flex flex-col gap-2">
                    <div className="text-[18px] sm:text-xl font-semibold">
                      ARENA Vipul Motors Faridabad, Mathura Road
                    </div>
                    <div className="flex gap-2 text-sm">
                      <div className="py-1"><MapPin size={18} /></div>
                      <div>27/5 KM, NH-19, Faridabad, Haryana 121002</div>
                    </div>
                  </div>

                  <div className="flex w-full justify-end">
                    <div className="flex gap-1 items-center text-sm group-hover:underline">
                      Navigate
                      <ArrowUpRight
                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/your-destination-url"
                className="group flex gap-4 border border-white p-4 transition duration-200 cursor-pointer"
              >
                {/* Optional Left Image or Icon */}
                {/* <div className="bg-slate-200 w-[140px] h-full"></div> */}

                <div className="flex flex-col gap-2 sm:gap-8 w-full">
                  <div className="flex flex-col gap-2">
                    <div className="text-[18px] sm:text-xl font-semibold">
                      ARENA Vipul Motors Faridabad, Ballabgarh
                    </div>
                    <div className="flex gap-2 text-sm">
                      <div className="py-1"><MapPin size={18} /></div>
                      <div>Shwar Bhawan, 21/3, Mathura Rd, Industrial Area, Sector 4, Ballabhgarh, Faridabad, Haryana 121004</div>
                    </div>
                  </div>

                  <div className="flex w-full justify-end">
                    <div className="flex gap-1 items-center text-sm group-hover:underline">
                      Navigate
                      <ArrowUpRight
                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/your-destination-url"
                className="group flex gap-4 border border-white p-4 transition duration-200 cursor-pointer"
              >
                {/* Optional Left Image or Icon */}
                {/* <div className="bg-slate-200 w-[140px] h-full"></div> */}

                <div className="flex flex-col gap-2 sm:gap-8 w-full">
                  <div className="flex flex-col gap-2">
                    <div className="text-[18px] sm:text-xl font-semibold">
                      ARENA Vipul Motors, Gurgaon, Udyog Vihar Phase 3
                    </div>
                    <div className="flex gap-2 text-sm">
                      <div className="py-1"><MapPin size={18} /></div>
                      <div>Plot No 504, Plot No 504, Udyog Vihar Phase III, Phase III, Udyog Vihar, Sector 20, Gurugram, Haryana 122001</div>
                    </div>
                  </div>

                  <div className="flex w-full justify-end">
                    <div className="flex gap-1 items-center text-sm group-hover:underline">
                      Navigate
                      <ArrowUpRight
                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </a>

            </div>

            <div className="w-full sm:w-2/3 h-full">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=17dg3RG3JrKjc78v_6N-sae2HGQpOScs&ehbc=2E312F&noprof=1"
                className="w-full h-[300px] sm:h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </div>


    </div >
  );
}
