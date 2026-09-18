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

type Queries = "None" | "Query 1" | "Query 2" | "Query 3" | "Query 4" | "Query 5" | "Query 6"

export default function ViewPage() {
    const [queryChoice, setQueryChoice] = useState<Queries>("None")

    const [query1, setQuery1] = useState([])
    const [query2, setQuery2] = useState([])
    const [query3, setQuery3] = useState([])
    const [query4, setQuery4] = useState([])
    const [query5, setQuery5] = useState([])
    const [query6, setQuery6] = useState([])

    const handle_query_changes = async (this_query: Queries) => {
        setQueryChoice(this_query)
        alert("Value changed")
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5 w-250">
                <div className="flex flex-col gap-2 w-full">
                    <Label>Query Type</Label>
                    <Select value={queryChoice} onValueChange={(v) => handle_query_changes(v as Queries)}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Select a query" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="None">None</SelectItem>
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
                    {queryChoice === "None" ? (
                        <div>
                            <p>Select a query</p>
                        </div>
                    ) : queryChoice === "Query 1" ? (
                        <div>
                            
                        </div>
                    ) : queryChoice === "Query 2" ? (
                        <div>

                        </div>
                    ) : queryChoice === "Query 3" ? (
                        <div>

                        </div>
                    ) : queryChoice === "Query 4" ? (
                        <div>

                        </div>
                    ) : queryChoice === "Query 5" ? (
                        <div>

                        </div>
                    ) : queryChoice === "Query 6" ? (
                        <div>

                        </div>
                    ) : null}
                </Card>
            </div>
        </div>
    )
}