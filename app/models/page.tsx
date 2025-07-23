import dynamic from "next/dynamic";
import { Suspense } from "react";

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
