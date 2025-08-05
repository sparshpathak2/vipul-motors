import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata = {
    title: "Explore Models | Vipul Motors",
    description: "Browse the latest Maruti Suzuki car models including hatchbacks, sedans, SUVs, and more. Find your perfect match with Vipul Motors.",
};


// Dynamically import your client component
const ModelsPageComponent = dynamic(() => import("./ModelsPageComponent"), {
    // ssr: false, // Disable server-side rendering for this component
});

export default function ModelsPage() {
    return (
        <Suspense fallback={<div>Loading models...</div>}>
            <ModelsPageComponent />
        </Suspense>
    );
}
