"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar, MapPin, Tag, ArrowLeft } from "lucide-react";
import { getEventById } from "@/api/http/consultEvents";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Event {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  category: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export default function EventDetails() {
  const params = useParams();
  const router = useRouter();
  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getEventById(id)
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Carregando...</p>
      </div>
    );

  if (!event)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Evento não encontrado.</p>
      </div>
    );

  const handleCheckout = () => {
    router.push(`https://buy.stripe.com/test_4gM14p77Df9Uebt6GvbEA00`);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="flex items-center text-gray-600 hover:text-gray-900 transition mb-6"
        aria-label="Voltar"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar
      </button>

      <Card className="bg-white p-0 grid grid-cols-1 md:grid-cols-2">
        <img
          src={event.imageUrl}
          alt={event.name}
          className="w-full h-full rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-l-lg"
        />

        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.name}</h1>

            <div className="space-y-3 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={event.startDate}>
                  {new Date(event.startDate).toLocaleDateString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  às{" "}
                  {new Date(event.startDate).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span className="capitalize">{event.category}</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          <Button
            onClick={handleCheckout}
            className="mt-6 py-4 text-lg bg-green-700 hover:bg-green-800 cursor-pointer"
          >
            Comprar ingresso
          </Button>
        </div>
      </Card>
    </main>
  );
}
