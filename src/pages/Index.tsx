
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CigaretteOff, Heart, Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-wellness-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comece sua jornada para uma vida sem tabaco
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubra dicas, hábitos saudáveis e receitas que vão te ajudar a 
              largar o cigarro e melhorar sua qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-wellness-green hover:bg-wellness-green/90"
                onClick={() => navigate("/dicas")}
              >
                Ver Dicas
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-wellness-green text-wellness-green hover:bg-wellness-green/10"
                onClick={() => navigate("/habitos")}
              >
                Gerenciar Hábitos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios de Parar de Fumar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-wellness-green/20 hover:shadow-md transition">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-wellness-green/10 rounded-full flex items-center justify-center">
                    <CigaretteOff className="h-8 w-8 text-wellness-green" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Saúde Respiratória</h3>
                <p className="text-gray-600 text-center">
                  Em apenas 72 horas sem fumar, sua respiração já melhora significativamente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-wellness-green/20 hover:shadow-md transition">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-wellness-green/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-wellness-green" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Saúde Cardiovascular</h3>
                <p className="text-gray-600 text-center">
                  Após 1 ano sem fumar, seu risco de doenças cardíacas cai pela metade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-wellness-green/20 hover:shadow-md transition">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-wellness-green/10 rounded-full flex items-center justify-center">
                    <Book className="h-8 w-8 text-wellness-green" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Qualidade de Vida</h3>
                <p className="text-gray-600 text-center">
                  Menos estresse, melhor paladar e olfato, mais energia para suas atividades diárias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wellness-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para dar o primeiro passo?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nós estamos aqui para te ajudar em cada etapa dessa jornada.
              Descubra nossas dicas, receitas e ferramentas para gerenciar hábitos.
            </p>
            <Button 
              size="lg" 
              className="bg-wellness-green hover:bg-wellness-green/90"
              onClick={() => navigate("/dicas")}
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
