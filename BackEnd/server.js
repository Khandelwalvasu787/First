import express from 'express'
const app = express()

app.use(express.json())

const TaskArray = [
    {TaskNAme:"task1"},
    {TaskNAme:"task2"},
    {TaskNAme:"task3"},
    {TaskNAme:"task4"},
    {TaskNAme:"task5"},

]

app.post('/backend', (req, res) => {
    const NewTAsk = req.body.Name
    TaskArray.push({TaskNAme:NewTAsk})
    console.log(TaskArray);
    res.status(201).json(TaskArray)
})

app.get('/', (req, res) => {
    res.status(201).json({msg:"Hello World"})
})

app.listen("8000", console.log("server is listening on port 8000"))