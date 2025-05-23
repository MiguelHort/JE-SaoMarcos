import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: "ID não informado" }, { status: 400 });
        }

        const event = await prisma.event.findUnique({
            where: { id: Number(id) },
        });

        if (!event) {
            return NextResponse.json({ error: "Evento não encontrado" }, { status: 404 });
        }

        return NextResponse.json(event);
    } catch (error) {
        console.error("Erro ao buscar evento:", error);
        return NextResponse.json({ error: "Erro ao buscar evento" }, { status: 500 });
    }
}
