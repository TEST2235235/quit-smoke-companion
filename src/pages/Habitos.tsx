
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Plus, Trash2, Check, Undo2 } from "lucide-react";

interface Habit {
  id: string;
  name: string;
  completed: boolean;
  streak: number;
}

const DEFAULT_HABITS = [
  { id: "1", name: "Beber 8 copos de água", completed: false, streak: 0 },
  { id: "2", name: "5 minutos de respiração profunda", completed: false, streak: 0 },
  { id: "3", name: "Caminhada de 15 minutos", completed: false, streak: 0 },
];

const Habitos = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState("");
  const [progress, setProgress] = useState(0);

  // Load habits from localStorage on component mount
  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    } else {
      setHabits(DEFAULT_HABITS);
    }
  }, []);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
    
    // Calculate progress
    const completedHabits = habits.filter(habit => habit.completed).length;
    const totalHabits = habits.length;
    const calculatedProgress = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;
    setProgress(calculatedProgress);
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim() === "") {
      toast.error("Por favor, digite um nome para o hábito");
      return;
    }

    const newHabitObj: Habit = {
      id: Date.now().toString(),
      name: newHabit,
      completed: false,
      streak: 0,
    };

    setHabits([...habits, newHabitObj]);
    setNewHabit("");
    toast.success("Novo hábito adicionado");
  };

  const toggleHabit = (id: string) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCompleted = !habit.completed;
          return {
            ...habit,
            completed: newCompleted,
            streak: newCompleted ? habit.streak + 1 : habit.streak,
          };
        }
        return habit;
      })
    );
  };

  const resetHabit = (id: string) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          return {
            ...habit,
            completed: false,
          };
        }
        return habit;
      })
    );
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter((habit) => habit.id !== id));
    toast.success("Hábito removido");
  };

  const resetAllHabits = () => {
    if (window.confirm("Tem certeza que deseja resetar todos os hábitos?")) {
      setHabits(
        habits.map((habit) => ({
          ...habit,
          completed: false,
        }))
      );
      toast.success("Todos os hábitos foram resetados");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Gerenciador de Hábitos Saudáveis
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Desenvolva novos hábitos para substituir o tabagismo
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Seu progresso diário</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-gray-500 text-right">
              {habits.filter(h => h.completed).length} de {habits.length} hábitos completados
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <Label htmlFor="new-habit">Adicionar novo hábito</Label>
            <div className="flex mt-2">
              <Input
                id="new-habit"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Ex: Fazer 10 respirações profundas"
                className="rounded-r-none"
              />
              <Button
                onClick={addHabit}
                className="rounded-l-none bg-wellness-green hover:bg-wellness-green/90"
              >
                <Plus className="h-4 w-4 mr-2" /> Adicionar
              </Button>
            </div>
          </div>
        </div>

        {habits.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Você ainda não adicionou nenhum hábito</p>
            <p className="text-sm text-gray-400 mt-2">
              Adicione hábitos saudáveis para substituir o tabagismo
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {habits.map((habit) => (
              <Card key={habit.id} className={`border-l-4 ${habit.completed ? 'border-l-green-500' : 'border-l-gray-300'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Button
                        variant={habit.completed ? "default" : "outline"}
                        size="icon"
                        className={`mr-3 h-8 w-8 ${habit.completed ? 'bg-green-500 hover:bg-green-600' : ''}`}
                        onClick={() => toggleHabit(habit.id)}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className={`font-medium ${habit.completed ? 'line-through text-gray-500' : ''}`}>
                          {habit.name}
                        </p>
                        {habit.streak > 0 && (
                          <p className="text-xs text-gray-500">Sequência: {habit.streak} {habit.streak === 1 ? 'dia' : 'dias'}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {habit.completed && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-500"
                          onClick={() => resetHabit(habit.id)}
                        >
                          <Undo2 className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => deleteHabit(habit.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={resetAllHabits}
                className="text-gray-600"
              >
                Resetar todos os hábitos
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Habitos;
