'use client'

import HeroCarousel from "@/components/HeroCarousel";
// import LocationPopup from "@/components/LocationPopup";
import LocationPopup from "@/components/LocationPopup2";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import { Button } from "@/components/ui/button";
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
            <SubNavbar />
            <Navbar />
            <HeroCarousel />
            <div className="flex w-full items-center pl-48 pr-16 py-12">
                <div className="flex flex-col w-1/2 gap-2">
                    <hr className="my-6 border-t border-red-600 w-24" />
                    <div className="flex flex-col gap-4">
                        <div className="text-3xl">WELCOME TO VIPUL MARUTI!</div>
                        <div className="text-gray-600">At Vipul, we believe that our relationship doesn’t end with getting you a new car. Its just the beginning of a long relationship which will need constant support and quality experience. Bimal is Bangalore’s largest Maruti Suzuki car dealership serving customers throughout the city from its 34+ locations, providing a comfortable and a superior experience.</div>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <Image
                        src={"/welcome-image.png"}
                        width={100}
                        height={100}
                        alt="Welcome to Vipul Motors"
                        className="h-72 w-full object-contain"
                    />
                </div>
            </div>
            {/* <div className="flex w-full h-24 gap-6 items-center justify-center">
        This the main homepage
        <Button>Test Button</Button>
      </div> */}
        </div>
    );
}
