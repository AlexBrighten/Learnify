"use client";

import { Card } from "./card";

type Props = {
    courses: {
        id: number;
        title: string;
        imageSrc: string;
    }[]; // Define the structure of a course
    activeCourseID: number;
};

export const List = ({ courses, activeCourseID }: Props) => {
    return (
        <div
            className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]"
        >
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={() => console.log(`Clicked course ID: ${course.id}`)} // Example click handler
                    disabled={false}
                    active={course.id === activeCourseID}
                />
            ))}
        </div>
    );
};
