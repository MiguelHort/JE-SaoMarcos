"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Header></Header>
      
      <section className="py-20 text-white bg-red-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Bem-vindo a <br/> Juventude Luterana</h1>
            <p className="mb-8 text-xl">Um espaço de fé, amizade e crescimento espiritual para jovens</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-300">
                <Link href="/sobre">Conheça-nos</Link>
              </Button>
              <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
                <Link href="/eventos">Eventos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-primary">Nossa Missão</h2>
            <p className="mb-6 text-lg text-gray-700">
              Criar um ambiente onde jovens possam crescer em sua fé, desenvolver amizades significativas e servir à comunidade ao seu redor, seguindo os ensinamentos de Jesus Cristo e os valores da tradição Luterana.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-800 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.479m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Comunidade</h3>
                <p className="text-gray-600">Construímos relacionamentos genuínos baseados no amor e respeito mútuos</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-700 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Fé</h3>
                <p className="text-gray-600">Aprofundamos nossa compreensão da Bíblia e da tradição Luterana</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Serviço</h3>
                <p className="text-gray-600">Colocamos nossa fé em ação através do serviço à comunidade local e global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary">Próximos Eventos</h2>
            <p className="text-lg text-gray-600">Participe e conecte-se com nossa comunidade</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
              <Link href="/eventos">Ver Todos os Eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <svg className="mx-auto mb-4 h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="mb-6 text-xl italic text-gray-700">
              "Encontrei no grupo de jovens luteranos uma verdadeira família. Aqui, aprendi a fortalecer minha fé e descobri como posso fazer a diferença no mundo ao meu redor."
            </p>
            <div>
              <h3 className="font-semibold text-gray-900">Mariana Silva</h3>
              <p className="text-gray-600">Membro desde 2022</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Junte-se a Nós</h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg">
            Estamos sempre abertos a novos membros. Venha conhecer nossa comunidade e fazer parte desta jornada de fé e amizade!
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/sobre#contato">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    
      <Footer></Footer>

    </main>
  );
}
