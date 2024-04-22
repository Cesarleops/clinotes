import fs from 'node:fs'
import { Command } from "commander";

const program = new Command()

program.command('new')
    .description('create a new note')
    .argument('string', 'note to save')
    .action(async (note) => { 
        const newNote = {
            id: crypto.randomUUID(),
            content: note
        }
        console.log(newNote)
        fs.readFile('db.json', 'utf-8', (err,data) => {
            if(err){
                console.error('ups')
                return

            }
            console.log('notas actuales', JSON.parse(data))

          JSON.parse(data).notes.push(newNote)
            console.log(data)

            // fs.writeFile('db.json', newNotes, (err) => {
            //     console.log('success ')
            // })

        })
        
    })

program.parse()
