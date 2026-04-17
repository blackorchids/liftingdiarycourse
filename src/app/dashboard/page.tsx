"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function formatDate(date: Date): string {
  const day = date.getDate();
  const ordinal =
    day % 100 >= 11 && day % 100 <= 13
      ? "th"
      : ["th", "st", "nd", "rd"][Math.min(day % 10, 3)];
  return `${day}${ordinal} ${format(date, "MMM yyyy")}`;
}

const mockWorkouts = [
  {
    id: "1",
    name: "Push Day",
    startedAt: new Date(),
    completedAt: new Date(),
    exercises: ["Bench Press", "Overhead Press", "Tricep Pushdown"],
  },
  {
    id: "2",
    name: "Chest & Shoulders",
    startedAt: new Date(),
    completedAt: null,
    exercises: ["Incline Dumbbell Press", "Lateral Raises"],
  },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        <Popover>
          <PopoverTrigger
            className={cn(buttonVariants({ variant: "outline" }), "w-[220px] justify-start gap-2")}
          >
            <CalendarIcon className="h-4 w-4" />
            {formatDate(date)}
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                if (d) setDate(d);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Workouts — {formatDate(date)}
        </h2>

        {mockWorkouts.length === 0 ? (
          <p className="text-muted-foreground text-sm">No workouts logged for this date.</p>
        ) : (
          mockWorkouts.map((workout) => (
            <Card key={workout.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{workout.name}</CardTitle>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      workout.completedAt
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {workout.completedAt ? "Completed" : "In progress"}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {workout.exercises.join(" · ")}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}
