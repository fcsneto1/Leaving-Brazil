import Image from "next/image"
import Link from "next/link"
import { Plane, Check, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"


const bannerLR = '/img/low/LR-neto-matsuri.jpg';

export default function DestinoJapaoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/img/logo-dj-180.webp"
                alt="Destino Japão"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/destino-japao#features" className="text-sm font-medium hover:text-red-600 transition-colors">
              O que você recebe
            </Link>
            {/*
            <Link href="#testimonials" className="text-sm font-medium hover:text-red-600 transition-colors">
              Depoimentos
            </Link>
            */}
            <Link href="/destino-japao#calendar" className="text-sm font-medium hover:text-red-600 transition-colors">
              Calendário
            </Link>
            <Link href="/destino-japao#pricing" className="text-sm font-medium hover:text-red-600 transition-colors">
              Investimento
            </Link>
            <Link
              href="/destino-japao#how-it-works"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Como funciona
            </Link>
            <Link href="/destino-japao#faq" className="text-sm font-medium hover:text-red-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <Link href="/destino-japao#pricing">
            <Button className="bg-red-600 hover:bg-red-700 text-white hidden md:flex">Inscreva-se</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                  Realize seu sonho de viver no Japão
                </h1>
                <p className="text-gray-500 md:text-xl">
                  Pacote completo de curso de japonês, preparatórios e suporte vitalício
                </p>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/b9Xy2SC/neto-matsuri.jpg"
                  alt="Neto em um Matsuri em Tóquio"
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

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  O que você recebe
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tudo o que você precisa para realizar seu sonho de viver no Japão
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch py-8">
              <Card className="flex flex-col h-full hover:border-red-500">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-red-100 p-3">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Curso de japonês online</h3>
                  <p className="text-gray-500 text-center">Do iniciante ao avançado, aprenda japonês no seu ritmo</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full hover:border-red-500">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-red-100 p-3">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Preparatório JLPT</h3>
                  <p className="text-gray-500 text-center">Preparação completa para os exames N5 a N2</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full hover:border-red-500">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-red-100 p-3">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Preparatório para visto</h3>
                  <p className="text-gray-500 text-center">Preparação para o visto Tokutei Ginou</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full hover:border-red-500">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-red-100 p-3">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Descontos exclusivos</h3>
                  <p className="text-gray-500 text-center">Em despachantes, passagens aéreas e translados</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full hover:border-red-500">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-red-100 p-3">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Suporte vitalício</h3>
                  <p className="text-gray-500 text-center">Para viagens, estudos ou trabalho no Japão</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full hover:border-red-500">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-red-100 p-3">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Wiki completa</h3>
                  <p className="text-gray-500 text-center">Sobre cultura, vistos, moradia e muito mais</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="calendar" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Calendário de conteúdo
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira as datas de liberação do nosso conteúdo
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-8">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-red-600 transition-colors">
                  <div className="bg-red-600 p-4">
                    <h3 className="text-xl font-bold text-white text-center">Curso de japonês</h3>
                    <p className="text-white/80 text-sm text-center">Do 0 ao N4</p>
                  </div>
                  <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                    <div className="rounded-full bg-red-100 p-4">
                      <Calendar className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="text-lg font-semibold">Liberação semanal</h4>
                    <p className="text-gray-500">A partir de Maio</p>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-red-600 w-1/3 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">Módulos liberados semanalmente</p>
                  </CardContent>
                </Card>

                <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-red-600 transition-colors">
                  <div className="bg-red-600 p-4">
                    <h3 className="text-xl font-bold text-white text-center">Preparatório JLPT</h3>
                    <p className="text-white/80 text-sm text-center">Exames oficiais</p>
                  </div>
                  <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                    <div className="rounded-full bg-red-100 p-4">
                      <Calendar className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="text-lg font-semibold">Primeira turma</h4>
                    <p className="text-gray-500">Em Junho</p>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-red-600 w-1/2 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">Aulas ao vivo e material de estudo</p>
                  </CardContent>
                </Card>

                <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-red-600 transition-colors">
                  <div className="bg-red-600 p-4">
                    <h3 className="text-xl font-bold text-white text-center">Preparatório SSW</h3>
                    <p className="text-white/80 text-sm text-center">Visto de trabalho</p>
                  </div>
                  <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                    <div className="rounded-full bg-red-100 p-4">
                      <Calendar className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="text-lg font-semibold">Liberação semanal</h4>
                    <p className="text-gray-500">A partir de Setembro</p>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-red-600 w-1/4 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">Preparação completa para o visto</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Como funciona
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seu caminho para o Japão em 4 passos simples
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Inscreva-se</h3>
                  <p className="text-gray-500">Escolha entre pagamento único ou financiamento e faça sua inscrição</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Acesso imediato ao curso e materiais</h3>
                  <p className="text-gray-500">
                    Receba acesso instantâneo a todo o conteúdo e comece a estudar imediatamente
                  </p>
                  <p className="text-gray-400">
                    Na opção de financiamento, o conteúdo será liberado conforme os pagamentos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Suporte 24/7 e acompanhamentos mensais</h3>
                  <p className="text-gray-500">
                    Receba suporte contínuo e acompanhamento personalizado durante toda sua jornada, aulas aovivo e
                    muito mais.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Conquiste o JLPT, visto e prepare sua mudança</h3>
                  <p className="text-gray-500">Alcance seus objetivos e realize seu sonho de viver no Japão</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Perguntas frequentes
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tire suas dúvidas sobre a Destino Japão
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Posso pagar em mais parcelas?</AccordionTrigger>
                  <AccordionContent>
                    Sim, temos opções de parcelamento no cartão de crédito em até 12x. Entre em contato conosco para
                    discutir as opções disponíveis para o seu caso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quando começam as aulas?</AccordionTrigger>
                  <AccordionContent>
                    As aulas começam imediatamente após a confirmação do seu pagamento. Você terá acesso à plataforma e
                    poderá iniciar seus estudos no mesmo dia. Para quem optou por financiamento os conteúdos são
                    liberados dratativamente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Como funciona o suporte vitalício?</AccordionTrigger>
                  <AccordionContent>
                    O suporte vitalício inclui acesso a nossa equipe de especialistas para tirar dúvidas sobre o Japão,
                    ajuda com documentação, orientação sobre moradia, trabalho e estudos, mesmo depois que você já
                    estiver no Japão. Além de receber informações e suporte de outros destinos, como: Irlanda, Portugal,
                    Austrália.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Preciso ter conhecimento prévio de japonês?</AccordionTrigger>
                  <AccordionContent>
                    Não, nosso curso incial, começa do absoluto 0 e avança gradualmente até o nível equivalente ao N4.
                    Você pode começar sem nenhum conhecimento prévio. Demais conteúdos e cursos serão publicados no
                    futuro para niveis além do N4.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>O que é o visto Tokutei Ginou?</AccordionTrigger>
                  <AccordionContent>
                    O visto Tokutei Ginou (Habilidades Específicas) é um tipo de visto de trabalho japonês que permite a
                    estrangeiros com habilidades específicas trabalhar em setores com escassez de mão de obra no Japão.
                    Nosso curso prepara você para os requisitos deste visto.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Investimento
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Invista no seu futuro com a Destino Japão
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-8">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Preço Regular */}
                <div className="bg-white rounded-lg shadow-sm border p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Preço Regular</h3>
                    <div className="text-4xl font-bold mb-1">R$ 3.036,00</div>
                    <p className="text-gray-500 text-sm">
                      O conteúdo base do "Destino Japão" ainda está sendo publicado.
                    </p>
                  </div>
                  <div className="mt-auto space-y-2 text-sm text-gray-500">
                    <p className="mt-6">
                      Após a publicação do material base vamos trabalhar com o valor de R$ 2.500,00
                    </p>
                    <p>Após o lançamento do nosso super APP, vamos trabalhar com preço regular de R$ 3.036,00</p>
                  </div>
                </div>

                {/* Preço de Lançamento */}
                <div className="bg-white rounded-lg shadow-sm border-2 border-red-500 p-6 flex flex-col h-full relative">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Preço de Lançamento</h3>
                    <div className="text-4xl font-bold text-red-600 mb-1">R$ 2.000,00</div>
                    <p className="text-gray-500 text-sm">no pix ou cartão, à vista ou parcelado em até 12x</p>
                  </div>
                  <div className="mt-auto space-y-4">
                    <div className="bg-green-50 text-green-700 text-sm py-1 px-3 rounded-md inline-block mt-6">
                      Economize R$ 1.036,00
                    </div>
                    <Link href={"https://pay.kiwify.com.br/SgGokTX"} target="_blank">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Garanta acesso Já!</Button>
                    </Link>                    
                  </div>
                </div>

                {/* Financiamento */}
                <div className="bg-white rounded-lg shadow-sm border p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Financiamento</h3>
                    <div className="text-4xl font-bold mb-1">R$ 350,00</div>
                    <p className="text-gray-500 text-sm">entrada (parcelável no cartão)</p>
                    <div className="flex items-center text-xl font-bold">
                      <span className="mr-2">+</span>
                      <span>R$ 150,00</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">parcelas mensais via PIX</p>
                  </div>
                  <div className="mt-auto space-y-2">
                    <Link href={"https://pay.kiwify.com.br/v6D15yy"} target="_blank">
                      <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                        Quero financiar
                      </Button>                
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 bg-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Garanta sua vaga por R$ 2.000,00
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vagas limitadas! Oferta válida por tempo limitado.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"https://pay.kiwify.com.br/SgGokTX"} target="_blank">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    Comprar à vista
                  </Button>
                </Link>
                <Link href={"https://pay.kiwify.com.br/v6D15yy"} target="_blank">
                  <Button size="lg" variant="outline" className="border-white text-white bg-red-700 hover:bg-white hover:text-red-600">
                    Quero financiar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-3">
            <h3 className="text-lg font-bold">Leaving Brazil</h3>
              <Link href={"../"}>
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
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Links rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#features" className="hover:text-red-600 transition-colors">
                    O que você recebe
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-red-600 transition-colors">
                    Investimento
                  </Link>
                </li>
                <li>
                  <Link href="#calendar" className="hover:text-red-600 transition-colors">
                    Calendário
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-red-600 transition-colors">
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-red-600 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>contato.leavingbrazil@gmail.com</li>
                <li><Link href="https://wa.me/8107083314530">WhatsApp</Link></li>
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
