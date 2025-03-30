import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Utensils } from "lucide-react";

interface RecipeType {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  ingredients: string[];
  instructions: string[];
  category: "bebidas" | "lanches" | "refeicoes";
}

const receitasData: RecipeType[] = [
  {
    id: "1",
    title: "Água Aromatizada com Frutas Cítricas",
    description: "Uma bebida refrescante que ajuda a distrair a vontade de fumar e mantém as mãos ocupadas.",
    prepTime: "5 minutos",
    ingredients: [
      "1 litro de água",
      "1 limão em rodelas",
      "1 laranja em rodelas",
      "Folhas de hortelã fresca",
      "Gelo a gosto",
    ],
    instructions: [
      "Em uma jarra, coloque a água filtrada.",
      "Adicione as rodelas de limão e laranja.",
      "Amasse levemente as folhas de hortelã e adicione à jarra.",
      "Deixe gelar por pelo menos 30 minutos antes de servir.",
      "Sirva com gelo e aprecie aos poucos durante o dia."
    ],
    category: "bebidas"
  },
  {
    id: "2",
    title: "Smoothie Antioxidante",
    description: "Rico em vitaminas que ajudam na desintoxicação do organismo após parar de fumar.",
    prepTime: "10 minutos",
    ingredients: [
      "1 banana congelada",
      "1 xícara de frutas vermelhas (morango, mirtilo, framboesa)",
      "1 colher de sopa de sementes de chia",
      "1 xícara de leite vegetal ou iogurte natural",
      "1 colher de chá de mel (opcional)",
    ],
    instructions: [
      "Coloque todos os ingredientes no liquidificador.",
      "Bata até obter uma consistência homogênea.",
      "Se necessário, adicione um pouco mais de líquido para ajustar a consistência.",
      "Sirva imediatamente em um copo alto.",
      "Pode adicionar uma folha de hortelã para decorar."
    ],
    category: "bebidas"
  },
  {
    id: "3",
    title: "Palitos de Legumes com Homus",
    description: "Lanche crocante e saudável para manter as mãos e boca ocupadas nos momentos de fissura.",
    prepTime: "15 minutos",
    ingredients: [
      "2 cenouras médias",
      "1 pepino médio",
      "1 aipo (salsão)",
      "1 pimentão vermelho",
      "1 xícara de homus pronto (ou caseiro)",
    ],
    instructions: [
      "Lave bem todos os vegetais.",
      "Corte as cenouras, pepino, aipo e pimentão em palitos finos.",
      "Disponha os palitos em um prato ou recipiente hermético se for levar para fora de casa.",
      "Coloque o homus em um potinho para mergulhar os palitos.",
      "Mantenha refrigerado até o momento de consumir."
    ],
    category: "lanches"
  },
  {
    id: "4",
    title: "Mix de Castanhas Temperadas",
    description: "Rico em magnésio e outros minerais que ajudam a reduzir a ansiedade.",
    prepTime: "25 minutos",
    ingredients: [
      "1 xícara de castanhas variadas (amêndoas, castanha-do-pará, nozes)",
      "1 colher de sopa de azeite de oliva",
      "1/2 colher de chá de sal marinho",
      "1/2 colher de chá de páprica defumada",
      "1/4 colher de chá de alho em pó",
    ],
    instructions: [
      "Pré-aqueça o forno a 180°C.",
      "Em uma tigela, misture as castanhas com o azeite e as especiarias.",
      "Distribua em uma assadeira forrada com papel manteiga.",
      "Asse por 10-15 minutos, mexendo na metade do tempo.",
      "Deixe esfriar completamente antes de armazenar em recipiente hermético."
    ],
    category: "lanches"
  },
  {
    id: "5",
    title: "Bowl de Quinoa com Legumes Assados",
    description: "Refeição completa rica em proteínas e fibras para manter a energia estável.",
    prepTime: "40 minutos",
    ingredients: [
      "1 xícara de quinoa",
      "2 xícaras de água",
      "2 xícaras de legumes variados cortados (brócolis, cenoura, abóbora)",
      "1 colher de sopa de azeite de oliva",
      "Sal, pimenta e ervas a gosto",
      "1/4 de abacate fatiado",
      "Sementes de gergelim para finalizar",
    ],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Lave a quinoa em água corrente e cozinhe em 2 xícaras de água com uma pitada de sal por cerca de 15 minutos.",
      "Tempere os legumes com azeite, sal e pimenta e asse por 20-25 minutos.",
      "Monte o bowl: coloque a quinoa como base, adicione os legumes assados ao lado.",
      "Finalize com fatias de abacate e sementes de gergelim por cima."
    ],
    category: "refeicoes"
  },
  {
    id: "6",
    title: "Wrap de Frango com Abacate",
    description: "Opção prática e nutritiva para uma refeição rápida e satisfatória.",
    prepTime: "20 minutos",
    ingredients: [
      "1 peito de frango grelhado e desfiado",
      "1 tortilha integral grande",
      "1/2 abacate amassado",
      "1/4 de xícara de alface picada",
      "1/4 de xícara de tomate picado",
      "1 colher de sopa de iogurte natural",
      "Suco de 1/2 limão",
      "Sal e pimenta a gosto",
    ],
    instructions: [
      "Misture o frango desfiado com sal, pimenta e suco de limão.",
      "Espalhe o abacate amassado sobre a tortilha.",
      "Adicione o frango temperado por cima.",
      "Distribua a alface e o tomate picados.",
      "Finalize com uma colher de iogurte natural.",
      "Enrole firmemente e corte ao meio para servir."
    ],
    category: "refeicoes"
  },
];

const Receitas = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Receitas Saudáveis
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Alimentação balanceada para ajudar na recuperação e controle da vontade de fumar
        </p>

        <Tabs defaultValue="bebidas" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
            <TabsTrigger value="lanches">Lanches</TabsTrigger>
            <TabsTrigger value="refeicoes">Refeições</TabsTrigger>
          </TabsList>
          
          {["bebidas", "lanches", "refeicoes"].map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {receitasData
                  .filter((receita) => receita.category === category)
                  .map((receita) => (
                    <Card key={receita.id} className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{receita.title}</CardTitle>
                            <CardDescription className="mt-2">{receita.description}</CardDescription>
                          </div>
                          <Utensils className="h-6 w-6 text-wellness-green" />
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-gray-500 mb-3">Tempo de preparo: {receita.prepTime}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Ingredientes:</h4>
                          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                            {receita.ingredients.map((ingredient, index) => (
                              <li key={index}>{ingredient}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Instruções:</h4>
                          <ol className="text-sm text-gray-600 list-decimal pl-5 space-y-1">
                            {receita.instructions.map((instruction, index) => (
                              <li key={index}>{instruction}</li>
                            ))}
                          </ol>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button variant="outline" className="w-full">Salvar Receita</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Receitas;
