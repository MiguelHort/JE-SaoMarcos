"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import EventCard, { EventProps } from "@/components/eventCard";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/api/http/consultEvents"; 

const categories = ["Todos", "Retiros", "Estudos", "Ação Social", "Louvor"];

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState<EventProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        const mappedEvents = data.map((event) => ({
          id: String(event.id),
          title: event.name,
          date: new Date(event.startDate).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }),
          time: new Date(event.startDate).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
          location: event.location,
          description: event.description,
          imageUrl: event.imageUrl,
          category: event.category,
        }));
        console.log("Eventos mapeados:", mappedEvents);
        setEvents(mappedEvents);
      } catch (err) {
        console.error("Erro ao buscar eventos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      activeCategory === "Todos" ||
      (activeCategory === "Retiros" && event.category.toLowerCase().includes("retiro")) ||
      (activeCategory === "Estudos" && event.category.toLowerCase().includes("estudo")) ||
      (activeCategory === "Ação Social" && event.category.toLowerCase().includes("social")) ||
      (activeCategory === "Louvor" && event.category.toLowerCase().includes("louvor"));

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">Eventos</h1>
          <p className="mx-auto max-w-2xl text-lg">
            Descubra os próximos eventos do grupo de jovens e participe da nossa comunidade
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 focus:border-primary focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={`${
                      activeCategory === category
                        ? "bg-primary hover:bg-primary-hover"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          {loading ? (
            <p className="text-center text-gray-500">Carregando eventos...</p>
          ) : filteredEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <h3 className="mb-2 text-xl font-medium text-gray-800">Nenhum evento encontrado</h3>
              <p className="text-gray-600">Tente ajustar seus filtros ou voltar mais tarde.</p>
            </div>
          )}
        </div>
      </section>

      {/* Event Proposal CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">Tem uma ideia para um evento?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
            Estamos sempre abertos a novas ideias! Se você tem uma proposta para um evento ou atividade para o nosso grupo de jovens, gostaríamos de ouvir.
          </p>
          <Button size="lg" className="bg-red-800 hover:bg-secondary-hover">
            Propor um Evento
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
