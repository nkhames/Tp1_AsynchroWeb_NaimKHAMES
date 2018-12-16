import express = require('express')
import { MetricsHandler } from './metrics'
import bodyparser= require('body-parser')

const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())


const port: string = process.env.PORT || '8080'
const dbMet : MetricsHandler = new MetricsHandler('./db/metrics')

app.get('/', (req: any, res: any) => {

 res.setHeader('Content-Type', 'text/plain')
 res.send('<body>On http://localhost:8080/Naim there a presentation on Naim<br><br>If you use http://localhost:8080/hello/jean you will have the message hello jean <br>This will work with every other names.<br><br>Else you will have an error 404 page<br></body>')
 res.end()
})
app.get('/Naim', (req: any, res: any) =>{
    res.setHeader('Content-Type', 'text/plain')
    res.send('I am Naïm Khames, engineer student.I love internet and forests.Good day everybody.')
   })
app.get('/hello/:name', (req: any, res: any) =>{
 res.setHeader('Content-Type', 'text/plain')
res.send('Hello ' + req.params.name) 
})
app.use((req: any, res: any) =>{
 res.setHeader('Content-Type', 'text/plain')
 res.status(404).send('Not found.')
})
app.get('/metrics', (req: any, res: any) => {
   MetricsHandler.get((err: Error | null, result?: any) => {
      if (err) {
        throw err
      }
      res.json(result)
    })
  })
app.get('/metrics:id', (req: any, res: any) => {
MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
    throw err
    }
    if(result===undefined) {
    res.write('no result')
    res.send()
    }
    else res.json(result)
})
})

app.post('/metrics/:id', (req: any, res: any, next:any) => {
   dbMet.save(req.params.id, req.body, (err: Error | null, result?: any) => {
     if (err) {
       res.status(500).send(err.message)
     }
     res.status(200).send()
   });
 })
app.delete('/:id', (req: any, res: any, next: any) => {
   dbMet.remove(req.params.id, (err: Error | null) => {
     if (err) next(err)
     res.status(200).send()
   })
 })
app.listen(port, (err: Error) => {
 if (err) {throw err}
 console.log("Server started on port " + port)
})