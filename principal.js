let cursos = [{
    id: 1,
    nombre:'Programación Avanzada',
    duracion: '50 horas',
    valor: '250000 pesos'
},
{
    id: 2,
    nombre:'Estadistica Inferencial',
    duracion: '30 horas',
    valor: '180000 pesos'
},
{
    id: 3,
    nombre: 'Inglés Básico',
    duracion: '20 horas',
    valor: '120000 pesos'
}];

const express = require('express')
const app = express()
const argv = require('yargs')
const fs = require('fs');

argv
    .command('$0', 'the default command', () => {}, (argv) => {
          app.use(express.static(__dirname + '/public'))
          app.listen(3000)
    }) 
    .command('inscribir', 'Inscripción de Cursos', (yargs) => {
        
        return yargs.option('id', {
                        alias: 'i',
                        demand: true
                    })
                    .option('nombre', {
                        alias: 'n',
                        demand: true
                    })
                    .option('cedula', {
                        alias: 'c',
                        demand: true
                    })
        },
        ({id, nombre, cedula}) => {

            let crearArchivo = (argv,encontrarCursos) =>{
                txtInscripcion = 'El Estudiante ' + nombre + '<br>' +
                        'con número de cédula ' + cedula + '<br>' + 
                        'se ha matriculado en el curso llamado ' + encontrarCursos.nombre + '<br>' +
                        'que tiene una duración de ' + encontrarCursos.duracion + '<br>' +
                        'y un valor de ' + encontrarCursos.valor

                    app.get('/', function (req, res) {
                        res.send(txtInscripcion)
                        })
                           
                    app.listen(3000)
                               
            }
            if (id < 1 || id > 3) {
                console.log('Ha ingresado un id que no corresponde a ningun curso')
                
                app.use(express.static(__dirname + '/public'))
                app.listen(3000)    
                    
            }else{
                let encontrarCursos = cursos.find( buscarCurso => buscarCurso.id == id);
                console.log(encontrarCursos);
                crearArchivo (argv,encontrarCursos);
            } 
        }
)


.argv;        


