"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"

type Queries = "Query 1" | "Query 2" | "Query 3" | "Query 4" | "Query 5" | "Query 6"

export default function ViewPage() {
    const [queryChoice, setQueryChoice] = useState<Queries>("Query 1")

    return (
        <div className="flex flex-col items-center justify-center px-80 gap-5">
            <div className="flex flex-col gap-2 self-start">
                <Label>Query Type</Label>
                <Select value={queryChoice} onValueChange={(v) => setQueryChoice(v as Queries)}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select a query" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Query 1">Query 1</SelectItem>
                        <SelectItem value="Query 2">Query 2</SelectItem>
                        <SelectItem value="Query 3">Query 3</SelectItem>
                        <SelectItem value="Query 4">Query 4</SelectItem>
                        <SelectItem value="Query 5">Query 5</SelectItem>
                        <SelectItem value="Query 6">Query 6</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Card className="w-full p-10">

            </Card>
        </div>
    )
}