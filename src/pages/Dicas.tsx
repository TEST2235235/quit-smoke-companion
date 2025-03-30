
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dicas = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Dicas para Parar de Fumar
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Estratégias práticas e eficazes para te ajudar na jornada sem tabaco
        </p>

        <Tabs defaultValue="primeiros-dias" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="primeiros-dias">Primeiros Dias</TabsTrigger>
            <TabsTrigger value="superando-crises">Superando Crises</TabsTrigger>
            <TabsTrigger value="longo-prazo">Longo Prazo</TabsTrigger>
          </TabsList>
          
          <TabsContent value="primeiros-dias" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Prepare-se mentalmente</CardTitle>
                  <CardDescription>Definindo sua mentalidade para o sucesso</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Defina uma data para parar e comunique a amigos e familiares</li>
                    <li>Liste seus motivos pessoais para parar de fumar e mantenha-os visíveis</li>
                    <li>Visualize-se como um não-fumante e afirme isso diariamente</li>
                    <li>Prepare-se para os desafios, reconhecendo que haverá momentos difíceis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Limpe seu ambiente</CardTitle>
                  <CardDescription>Eliminando gatilhos do seu dia a dia</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Jogue fora todos os cigarros, isqueiros e cinzeiros</li>
                    <li>Lave roupas e limpe espaços onde costumava fumar para eliminar o cheiro</li>
                    <li>Reorganize os ambientes onde associava com o hábito de fumar</li>
                    <li>Tenha sempre à mão substitutos como chicletes, balas sem açúcar ou palitos</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Novas rotinas</CardTitle>
                  <CardDescription>Substituindo velhos hábitos por novos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Identifique seus gatilhos (café, álcool, após refeições) e crie planos alternativos</li>
                    <li>Aumente sua ingestão de água para ajudar na desintoxicação</li>
                    <li>Comece uma atividade física leve como caminhadas diárias</li>
                    <li>Pratique técnicas de respiração profunda quando sentir vontade de fumar</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="superando-crises" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Técnicas para momentos de fissura</CardTitle>
                  <CardDescription>Como lidar com a vontade intensa de fumar</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Regra dos 4 minutos: a fissura geralmente passa em 3-4 minutos, respire e aguente</li>
                    <li>Beba um copo de água lentamente quando a vontade surgir</li>
                    <li>Distraia-se com uma atividade manual: quebra-cabeças, desenho, artesanato</li>
                    <li>Use técnicas de relaxamento como meditação ou visualização guiada</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Lidando com situações sociais</CardTitle>
                  <CardDescription>Como resistir quando está com outros fumantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Evite inicialmente ambientes com muitos fumantes até se sentir mais confiante</li>
                    <li>Prepare frases para recusar educadamente quando oferecerem cigarros</li>
                    <li>Peça apoio a amigos próximos para não fumarem perto de você</li>
                    <li>Tenha sempre uma alternativa em mãos (chiclete, bala, etc)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recompensas imediatas</CardTitle>
                  <CardDescription>Criando um sistema de automotivação</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Crie um "fundo de cigarros não fumados": guarde o dinheiro que economiza</li>
                    <li>Use aplicativos de rastreamento que mostram benefícios à saúde em tempo real</li>
                    <li>Celebre cada dia sem fumar com pequenas recompensas</li>
                    <li>Compartilhe suas conquistas com pessoas que apoiam sua jornada</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="longo-prazo" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fortaleça sua nova identidade</CardTitle>
                  <CardDescription>Consolidando a imagem de não-fumante</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Use afirmações positivas: "Eu sou uma pessoa que valoriza a saúde"</li>
                    <li>Ajude outros que estão tentando parar, fortalecendo seu próprio compromisso</li>
                    <li>Documente sua jornada: mantenha um diário ou blog sobre suas conquistas</li>
                    <li>Quando se imaginar no futuro, visualize-se sempre como não-fumante</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cuidado com recaídas</CardTitle>
                  <CardDescription>Como voltar aos trilhos se houver um deslize</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Não se castigue excessivamente: um deslize não significa fracasso total</li>
                    <li>Analise o que levou à recaída e aprenda com a experiência</li>
                    <li>Renove seu compromisso imediatamente após um deslize</li>
                    <li>Busque apoio profissional se recaídas forem frequentes</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Manutenção do estilo de vida</CardTitle>
                  <CardDescription>Hábitos a longo prazo para evitar voltar a fumar</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mantenha uma rotina regular de exercícios físicos</li>
                    <li>Desenvolva técnicas de gerenciamento do estresse (principal causa de recaídas)</li>
                    <li>Alimente-se de forma saudável e balanceada</li>
                    <li>Cultive relacionamentos com pessoas que apoiam seu estilo de vida sem tabaco</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dicas;
