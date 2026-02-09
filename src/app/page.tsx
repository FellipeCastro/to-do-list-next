import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Plus,
    List,
    Check,
    CircleAlert,
    Trash,
    ListCheck,
    Sigma,
} from "lucide-react";
import EditTask from "@/components/edit-task";

export default function Home() {
    return (
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
            <Card className="w-lg">
                <CardHeader className="flex gap-2">
                    <Input placeholder="Adicionar tarefa" />
                    <Button variant="default" className="cursor-pointer">
                        <Plus /> Cadastrar
                    </Button>
                </CardHeader>

                <CardContent>
                    <Separator className="mb-4" />
                    <div className="flex gap-2">
                        <Badge variant="default" className="cursor-pointer">
                            <List /> Todas
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                            <CircleAlert /> Não finalizadas
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                            <Check /> Finalizadas
                        </Badge>
                    </div>

                    <div className="mt-4 border-b">
                        <div className="h-14 flex justify-between items-center border-t">
                            <div className="w-1 h-full bg-green-300"></div>
                            <p className="flex-1 px-2 text-sm">Estudar React</p>
                            <div className="flex items-center gap-4">


                                <EditTask />

                                <Trash size={16} className="cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <div className="flex gap-2 items-center">
                            <ListCheck size={18} />
                            <p className="text-xs">tarefas concluidas (3/3)</p>
                        </div>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button
                                    className="text-xs h-7 cursor-pointer"
                                    variant="outline"
                                >
                                    <Trash /> Limpar tarefas concluidas
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Tem certeza que deseja excluir X items?
                                    </AlertDialogTitle>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction>Sim</AlertDialogAction>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>

                    <div className="h-4 w-full bg-gray-100 mt-4 rounded-md">
                        <div
                            className="h-full bg-blue-500 rounded-md"
                            style={{ width: "50%" }}
                        ></div>
                    </div>

                    <div className="flex justify-end items-center mt-2 gap-2">
                        <Sigma size={18} />
                        <p className="text-xs">3 tarefas no total</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
