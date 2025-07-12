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
            <LocationPopup />
            <div className="hidden sm:block">
                <SubNavbar />
            </div>
            <Navbar />
            <HeroCarousel />
            {/* <div className="flex w-full pl-48 pr-16 py-12"> */}
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

            {/* <div className="flex w-full h-24 gap-6 items-center justify-center">
        This the main homepage
        <Button>Test Button</Button>
      </div> */}
        </div>
    );
}


// return (
//     <div className="flex w-full flex-col">
//         <LocationPopup />
//         <SubNavbar />
//         <Navbar />
//         <HeroCarousel />
//         <div className="flex w-full items-center pl-48 pr-16 py-12">
//             <div className="flex flex-col w-1/2 gap-2">
//                 <hr className="my-6 border-t border-red-600 w-24" />
//                 <div className="flex flex-col gap-4">
//                     <div className="text-3xl">WELCOME TO VIPUL MARUTI!</div>
//                     <div className="text-gray-600">At Vipul, we believe that our relationship doesn’t end with getting you a new car. Its just the beginning of a long relationship which will need constant support and quality experience. Bimal is Bangalore’s largest Maruti Suzuki car dealership serving customers throughout the city from its 34+ locations, providing a comfortable and a superior experience.</div>
//                 </div>
//             </div>
//             <div className="w-1/2 flex items-center justify-center">
//                 <Image
//                     src={"/welcome-image.png"}
//                     width={100}
//                     height={100}
//                     alt="Welcome to Vipul Motors"
//                     className="h-72 w-full object-contain"
//                 />
//             </div>
//         </div>
//     </div>
// );