import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(
        @InjectModel('Task')
        private readonly taskModel: Model<Task>
    ) { }

    async getTasks(): Promise<Task[]> {
        return await this.taskModel.find({softDeleted:false});
    }

    async getTaskById(id: string): Promise<Task> {
        return await this.taskModel.findOne({ _id: id });
    }

    async createTask(createTask: Task): Promise<Task> {
        const newTask = new this.taskModel(createTask);
        return await newTask.save();
    }

    async updateTask(id: string, task: Task): Promise<Task> {
        return await this.taskModel.findByIdAndUpdate(id, task, { new: true });
    }

    async updateTaskStatus(id: string, status: string) {
        return await this.taskModel.findByIdAndUpdate(id, { status: status }, { new: true });
    }

    async deleteTask(id: string) {
        return await this.taskModel.findByIdAndUpdate(id, { softDeleted: true }, { new: true });
    }

}
