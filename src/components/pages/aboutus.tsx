import { Card } from "@/components/ui/card"

export default function AboutUsPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-3 text-center">
            <Card className="px-10">
                <h1 className="text-2xl font-bold">About This Project</h1>
                <p className="max-w-md text-gray-600">
                    School Management Simulation is a Database assignment (HW7) demonstrating
                    the full database development process from business rules and UML design
                    to a normalized MySQL schema and a working Next.js application.
                </p>
                <p className="text-sm text-gray-500">Developed by</p>
                <h2 className="text-md font-bold text-gray-500">Pasin Makcharoen 6810545794</h2>
            </Card>
        </div>
    )
}