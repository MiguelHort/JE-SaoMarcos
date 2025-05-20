import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface EventProps {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    imageUrl: string;
}

const EventCard = ({ title, date, time, location, description, imageUrl }: EventProps) => {
    return (
        <Card className="event-card overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
                <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
            </div>
            <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary">{title}</CardTitle>
                <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{date} • {time}</span>
                </div>
                <CardDescription className="font-medium text-gray-700">{location}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-cyan-700 hover:bg-secondary-hover">
                    <Link href="/sobre#contato">Mais Detalhes</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default EventCard;