"use client"

import { useState, useEffect } from "react"

import { Card } from "@/components/ui/card"

type School = {
    schID: number;
    schName: string;
    schStatus: 'operating' | 'closed';
    schOrganization: 'private' | 'government';
    schRegister: string;
};

type Student = {
    stuID: number;
    schID: number;
    sName: string;
    sStatus: 'undergraduate' | 'graduated';
    sGPAX: number | null;
    curriculum: string | null;
    createdAt: string;
};

type Teacher = {
    tID: number;
    schID: number;
    tName: string;
    curriculum: string | null;
    tStatus: 'station' | 'outoffservice';
    createdAt: string;
};

type AvailableSubjects = {
    subjectID: number;
    subjectName: string;
    credits: number;
};

type Enrollment = {
    stuID: number;
    subjectID: number;
    enrollDate: string;
    grade: number | null;
};

export default function DashboardPage() {
    const [students, setStudents] = useState<Student[]>([])
    const [schools, setSchools] = useState<School[]>([])
    const [teachers, setTeachers] = useState<Teacher[]>([])
    const [subjects, setSubjects] = useState<AvailableSubjects[]>([])
    const [enrollments, setEnrollments] = useState<Enrollment[]>([])

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-row justify-center items-center gap-6" >
                <Card className="flex flex-col justify-center items-center p-4 w-40">
                    <h2>Total Students</h2>
                    <p>{students.length}</p>
                </Card>
                <Card className="flex flex-col justify-center items-center p-4 w-40">
                    <h2>Total Teachers</h2>
                    <p>{teachers.length}</p>
                </Card>
                <Card className="flex flex-col justify-center items-center p-4 w-40">
                    <h2>Total Subjects</h2>
                    <p>{subjects.length}</p>
                </Card>
                <Card className="flex flex-col justify-center items-center p-4 w-40">
                    <h2>Total Schools</h2>
                    <p>{schools.length}</p>
                </Card>
                <Card className="flex flex-col justify-center items-center p-4 w-40">
                    <h2>Total Enrollments</h2>
                    <p>{enrollments.length}</p>
                </Card>
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-13">
                <div className="self-start justify-center w-full">
                    <h2 className="pl-7 pb-1">Students</h2>
                    <div className="pt-[2px] w-full rounded-full bg-gray-200"></div>

                    {students.length === 0 ? (
                        <div className="flex flex-col items-center justify-center pt-5">
                            None
                        </div>
                    ) : (
                        <div>

                        </div>
                    )}
                </div>

                <div className="self-start justify-center w-full">
                    <h2 className="pl-7 pb-1">Teachers</h2>
                    <div className="pt-[2px] w-full rounded-full bg-gray-200"></div>

                    {teachers.length === 0 ? (
                        <div className="flex flex-col items-center justify-center pt-5">
                            None
                        </div>
                    ) : (
                        <div>

                        </div>
                    )}
                </div>

                <div className="self-start justify-center w-full">
                    <h2 className="pl-7 pb-1">Schools</h2>
                    <div className="pt-[2px] w-full rounded-full bg-gray-200"></div>

                    {schools.length === 0 ? (
                        <div className="flex flex-col items-center justify-center pt-5">
                            None
                        </div>
                    ) : (
                        <div>

                        </div>
                    )}
                </div>

                <div className="self-start justify-center w-full">
                    <h2 className="pl-7 pb-1">Subjects</h2>
                    <div className="pt-[2px] w-full rounded-full bg-gray-200"></div>

                    {subjects.length === 0 ? (
                        <div className="flex flex-col items-center justify-center pt-5">
                            None
                        </div>
                    ) : (
                        <div>

                        </div>
                    )}
                </div>

                <div className="self-start justify-center w-full">
                    <h2 className="pl-7 pb-1">Enrollments</h2>
                    <div className="pt-[2px] w-full rounded-full bg-gray-200"></div>

                    {enrollments.length === 0 ? (
                        <div className="flex flex-col items-center justify-center pt-5">
                            None
                        </div>
                    ) : (
                        <div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}