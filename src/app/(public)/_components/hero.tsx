import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImage from "../../../../public/doctor-hero.png";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8" >
        <main className="flex items-center justify-center">
          <article className="max-w-3xl space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-bold max-w-2xl tracking-tight">
              Encontre melhores Profissionais em um unico lugar
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Nós somos uma plataforma de apoio para profissionais de saúde com foco em agilizar seu atendimento de forma simplificada e eficiente.
            </p>

            <Button className="bg-emerald-500 hover:bg-emerald-400 w-fit">
              Encontre um Profissional
            </Button>
          </article>

          <div className="hidden lg:block">
            <Image
              src={doctorImage}
              alt="Foto ilstrativa de um profissional de saúde"
              width={340}
              height={400}
              className="object-contain"
              priority
              quality={100}
            
            />
          </div>
        </main>
      </div>
    </section>
  );
}