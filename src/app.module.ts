import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

const dbUrl = 'mongodb+srv://test:06031999@cluster0.48fqt.mongodb.net/tasks-managament?retryWrites=true&w=majority';

@Module({
  imports: [TasksModule,MongooseModule.forRoot(dbUrl)],
  controllers: [],
  providers: [],
})
export class AppModule { }
