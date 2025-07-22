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

            {/* Models Section */}
            <div className="flex flex-col w-full px-4 py-12 sm:px-16 sm:py-24 gap-6 sm:gap-12">

                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-3xl">Explore Models</h2>
                        <div>Lorem ipsum dolor sit amet consectetur. In amet risus mi risus habitant porttitor tincidunt.</div>
                    </div>

                    <Button className="flex gap-2 w-fit">
                        Explore All
                        <ArrowUpRight size={20} />
                    </Button>
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
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
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
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
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
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
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
                                <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button>
                                <Button className="flex-1 min-w-0 truncate">Get Price List</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* About Section */}
            <div className="flex flex-col sm:flex-row bg-white mx-4 sm:mx-16 mt-4 mb-20">

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

            {/* <div className="flex flex-col w-full text-center py-30 gap-8">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
                    <div>We promise you the best of our service.</div>
                </div>
                <FAQs />
            </div> */}

        </div>
    );
}
