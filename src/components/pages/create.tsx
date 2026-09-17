"use client"

import { useState } from "react"

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

type EntityType = "student" | "teacher" | "school" | "subject"

export default function CreatePage() {
    const [entity, setEntity] = useState<EntityType>("student")

    const [sName, setSName] = useState("")
    const [sStatus, setSStatus] = useState("")
    const [sGPAX, setSGPAX] = useState("")
    const [curriculum, setCurriculum] = useState("")
    const [schID, setSchID] = useState("")

    const [tName, setTName] = useState("")
    const [tCurriculum, setTCurriculum] = useState("")
    const [tStatus, setTStatus] = useState("")
    const [tSchID, setTSchID] = useState("")

    const [schName, setSchName] = useState("")
    const [schStatus, setSchStatus] = useState("")
    const [schOrganization, setSchOrganization] = useState("")
    const [schRegister, setSchRegister] = useState("")

    const [subjectName, setSubjectName] = useState("")
    const [credits, setCredits] = useState("")

    const handleSubmit = () => {
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Card className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label>Entity Type</Label>
                    <Select value={entity} onValueChange={(v) => setEntity(v as EntityType)}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Select entity" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="school">School</SelectItem>
                            <SelectItem value="subject">Subject</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {entity === "student" && (
                    <div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Name</Label>
                            <Input value={sName} onChange={(e) => setSName(e.target.value)} placeholder="Student name" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Status</Label>
                            <Input value={sStatus} onChange={(e) => setSStatus(e.target.value)} placeholder="undergraduate / graduated" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>GPAX</Label>
                            <Input type="number" step="0.01" value={sGPAX} onChange={(e) => setSGPAX(e.target.value)} placeholder="0.00 - 4.00" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Curriculum</Label>
                            <Input value={curriculum} onChange={(e) => setCurriculum(e.target.value)} placeholder="e.g. math-science" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>School ID</Label>
                            <Input type="number" value={schID} onChange={(e) => setSchID(e.target.value)} placeholder="School ID" />
                        </div>
                    </div>
                )}

                {entity === "teacher" && (
                    <div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Name</Label>
                            <Input value={tName} onChange={(e) => setTName(e.target.value)} placeholder="Teacher name" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Curriculum</Label>
                            <Input value={tCurriculum} onChange={(e) => setTCurriculum(e.target.value)} placeholder="e.g. math-science" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Status</Label>
                            <Input value={tStatus} onChange={(e) => setTStatus(e.target.value)} placeholder="station / outoffservice" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>School ID</Label>
                            <Input type="number" value={tSchID} onChange={(e) => setTSchID(e.target.value)} placeholder="School ID" />
                        </div>
                    </div>
                )}

                {entity === "school" && (
                    <div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Name</Label>
                            <Input value={schName} onChange={(e) => setSchName(e.target.value)} placeholder="School name" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Status</Label>
                            <Input value={schStatus} onChange={(e) => setSchStatus(e.target.value)} placeholder="operating / closed" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Organization</Label>
                            <Input value={schOrganization} onChange={(e) => setSchOrganization(e.target.value)} placeholder="private / government" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Register Date</Label>
                            <Input type="date" value={schRegister} onChange={(e) => setSchRegister(e.target.value)} />
                        </div>
                    </div>
                )}

                {entity === "subject" && (
                    <div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Subject Name</Label>
                            <Input value={subjectName} onChange={(e) => setSubjectName(e.target.value)} placeholder="e.g. math" />
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <Label>Credits</Label>
                            <Input type="number" value={credits} onChange={(e) => setCredits(e.target.value)} placeholder="e.g. 3" />
                        </div>
                    </div>
                )}

                <Button onClick={handleSubmit}>Create</Button>
            </Card>
        </div>
    )
}