import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

const add = (a: number, b:number)=>{
    return a+b;
}

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    console.log(add(5,5))
    res.send('hello');
})

app.listen(3000 ,()=>{
    console.log('Server is listening in port 3000')
})