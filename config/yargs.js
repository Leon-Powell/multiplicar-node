const argv = require('yargs')
var colors = require('colors');

const { crearArchivo, listarTabla } = require('.multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, arg.limite)
            .them(archivo => console.log(archivo creado: $ { archivo });)
            .catch
}

.command('listar, imprime en consola la tabla de multiplicar')
base: {
        demand: true,
        alias: 'b'

    },
    limite {
        alias: 'l'
        default: 10,
    }

})
.command('crear, genera un archivo con la tabla multiplicar')
base: {
        demand: true,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }
})
.help()
    .argv;