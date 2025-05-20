import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            <span className="text-red-800">JE</span> SãoMarcos
                        </Link>
                        <p className="text-gray-600">
                            Unindo jovens em fé, amizade e serviço à comunidade.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-800">Links Rápidos</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><Link href="/" className="hover:text-red-800">Início</Link></li>
                            <li><Link href="/eventos" className="hover:text-red-800">Eventos</Link></li>
                            <li><Link href="/sobre" className="hover:text-red-800">Sobre Nós</Link></li>
                            <li><Link href="/albuns" className="hover:text-red-800">Álbuns de Fotos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-800">Contato</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-red-800" />
                                <span>(11) 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-red-800" />
                                <span>contato@jovensluteranos.org</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1 text-red-800" />
                                <span>Rua da Igreja, 123<br />São Paulo - SP</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-800">Horários</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li><span className="font-medium">Encontros:</span> Sábados às 19h</li>
                            <li><span className="font-medium">Estudos Bíblicos:</span> Quartas às 20h</li>
                            <li><span className="font-medium">Culto de Jovens:</span> Último domingo do mês às 18h</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-200 py-6 text-center text-gray-600">
                    <p>© {new Date().getFullYear()} JE São Marcos. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
