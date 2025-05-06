import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Building2,
  Briefcase,
  MapPin,
  ArrowRight,
  Globe,
  Book,
  MessageCircle,
  Phone,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const bannerLR = '/img/low/LR-banner.jpg';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/img/logo-lb-180.webp"
                alt="Leaving Brazil"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#destinos" className="text-sm font-medium hover:text-brazil-blue transition-colors">
              Destinos
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-brazil-blue transition-colors">
              Serviços
            </Link>
            <Link href="#wiki" className="text-sm font-medium hover:text-brazil-blue transition-colors">
              Wiki
            </Link>
            <Link href="#comunidade" className="text-sm font-medium hover:text-brazil-blue transition-colors">
              Comunidade
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-brazil-blue transition-colors">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href={"#contato"}>
            <Button className="bg-brazil-blue hover:bg-brazil-blue/90 text-white">Entre em contato</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-brazil-green to-brazil-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Realize seu sonho de morar no exterior
                </h1>
                <p className="md:text-xl">
                  Assessoria completa para intercâmbio, estudo, trabalho e imigração em diversos países
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={"#destinos"}>
                  <Button size="lg" className="bg-brazil-yellow hover:bg-brazil-yellow/90 text-brazil-black">
                    Conheça nossos destinos
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/mCqkJfsw/aeroporto.jpg"
                  alt="Pessoas viajando pelo mundo"
                  fill
                  className="object-cover"
                  placeholder="blur" // Placeholder com efeito blur
                  blurDataURL={bannerLR} // Imagem de baixa resolução como placeholder
                  loading="lazy" // Lazy loading (opcional, já é padrão)
                />
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinos" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brazil-black">
                  Destinos populares
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os países mais procurados para intercâmbio, estudo e trabalho
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 items-stretch py-8 max-w-4xl">
              <Link href="/destino-japao" className="group">
                <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-brazil-blue">
                  <div className="relative h-48 w-full">
                    <Image src="https://i.ibb.co/jkymzNVx/mt-fuji.jpg" alt="Japão" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">Japão</h3>
                    </div>
                  </div>
                  <CardContent className="flex flex-col space-y-2 p-4">
                    <p className="text-gray-500">Trabalho, estudo e turismo no país do sol nascente</p>
                    <div className="flex items-center text-brazil-blue group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Saiba mais</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="#contato" className="group">
                <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-brazil-blue">
                  <div className="relative h-48 w-full">
                    <Image src="https://i.ibb.co/C5ByLRp5/temple-bar.jpg" alt="Irlanda" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">Irlanda</h3>
                    </div>
                  </div>
                  <CardContent className="flex flex-col space-y-2 p-4">
                    <p className="text-gray-500">Estudo, trabalho e imigração na ilha esmeralda</p>
                    <div className="flex items-center text-brazil-blue group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Entre em contato</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="text-center mt-4 text-gray-500 italic">
              <p>Novos destinos em breve</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brazil-black">
                  Nossos serviços
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Assessoria completa para todas as suas necessidades internacionais
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch py-8">
              <Card className="flex flex-col h-full">
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <div className="rounded-full bg-brazil-blue/10 p-3">
                    <GraduationCap className="h-6 w-6 text-brazil-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Intercâmbio Educacional</h3>
                  <p className="text-gray-500">Cursos de idiomas, graduação e pós-graduação no exterior</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <div className="rounded-full bg-brazil-blue/10 p-3">
                    <Briefcase className="h-6 w-6 text-brazil-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Trabalho no Exterior</h3>
                  <p className="text-gray-500">
                    Vistos de trabalho, programas de work and holiday e oportunidades profissionais
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <div className="rounded-full bg-brazil-blue/10 p-3">
                    <Building2 className="h-6 w-6 text-brazil-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Imigração</h3>
                  <p className="text-gray-500">Treinamente e suporte para aquisição de vistos que permitem residencia permanente</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <div className="rounded-full bg-brazil-blue/10 p-3">
                    <MapPin className="h-6 w-6 text-brazil-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Turismo Internacional</h3>
                  <p className="text-gray-500">Planejamento de viagens, vistos de turismo e roteiros personalizados</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Wiki Section */}
        <section id="wiki" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brazil-black">
                  Wiki Leaving Brazil
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compilado de informações essenciais para quem deseja morar no exterior
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-8">
              <Card className="border-2 border-brazil-blue">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="rounded-full bg-brazil-blue/10 p-4">
                      <Book className="h-10 w-10 text-brazil-blue" />
                    </div>
                    <h3 className="text-2xl font-bold">Acesse nossa base de conhecimento</h3>
                    <p className="text-gray-500">
                      Temos um compilado completo de informações sobre vistos, documentação, custo de vida, moradia, trabalho e muito mais para diversos países.
                    </p>
                    <Button size="lg" className="bg-brazil-blue hover:bg-brazil-blue/90 text-white" asChild>
                      <Link
                        href="https://leavingbrazil.notion.site/18c07334ec2b802f923bd8f6589e14b0?v=18c07334ec2b816ba9e2000cc7de6f69&pvs=74"
                        target="_blank"
                      >
                        Acessar Wiki no Notion
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="comunidade" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brazil-black">
                  Comunidade no WhatsApp
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conecte-se com outros brasileiros que estão planejando ou já vivem no exterior
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-8">
              <Card className="border-2 border-green-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="rounded-full bg-green-100 p-4">
                      <MessageCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Participe da nossa comunidade</h3>
                    <p className="text-gray-500">
                      Troque experiências, tire dúvidas e faça networking com outros brasileiros que compartilham o
                      mesmo sonho de viver no exterior.
                    </p>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                      <Link href="https://chat.whatsapp.com/JDCaX3PStFEGSbxtrPMrlN" target="_blank">
                        Entrar no grupo do WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brazil-black">
                  Entre em contato e tire suas dúvidas
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos prontos para ajudar você a realizar seu sonho de viver no exterior
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-8">
              <Card className="border-2 border-brazil-green">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="rounded-full bg-brazil-green/10 p-4">
                      <Phone className="h-10 w-10 text-brazil-green" />
                    </div>
                    <h3 className="text-2xl font-bold">Fale diretamente conosco</h3>
                    <p className="text-gray-500">
                      Tire suas dúvidas, solicite informações específicas ou agende uma consulta personalizada com
                      nossos especialistas.
                    </p>
                    <Button size="lg" className="bg-brazil-green hover:bg-brazil-green/90 text-white" asChild>
                      <Link href="https://wa.me/8107083314530" target="_blank">
                        Conversar no WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-brazil-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para começar sua jornada?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mande uma mensagem para nossos especialistas
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brazil-yellow text-brazil-black hover:bg-brazil-yellow/90" asChild>
                  <Link href="https://wa.me/8107083314530" target="_blank">
                    Conversar no WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Leaving Brazil</h3>
              <Link href={"/"}>
                <Image
                  src="https://i.ibb.co/XfDDgkgv/logo-lb-180.webp"
                  alt="Leaving Brazil"
                  width={150}
                  height={50}
                  className="h-8 w-auto"
                />
                <p className="text-sm text-gray-500">Realize seu sonho de morar no exterior</p>
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Links rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#destinos" className="hover:text-brazil-blue transition-colors">
                    Destinos
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-brazil-blue transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://leavingbrazil.notion.site/18c07334ec2b802f923bd8f6589e14b0?v=18c07334ec2b816ba9e2000cc7de6f69&pvs=74"
                    target="_blank"
                  >
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link href="https://chat.whatsapp.com/JDCaX3PStFEGSbxtrPMrlN" target="_blank" className="hover:text-brazil-blue transition-colors">
                    Comunidade
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-brazil-blue transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Destinos</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/destino-japao" className="hover:text-brazil-blue transition-colors">
                    Japão
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-brazil-blue transition-colors">
                    Irlanda
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Leaving Brazil. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Conexão segura SSL
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
