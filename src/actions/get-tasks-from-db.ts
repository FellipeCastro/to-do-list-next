"use server";
import { prisma } from "@/utils/prisma";

export const getTasksFromDB = async () => {
    const tasks = await prisma.tasks.findMany();

    if (!tasks) return;

    return tasks;
};
