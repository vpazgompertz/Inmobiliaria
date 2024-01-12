console.log('todo ok')

const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5.000,
    smoke: false,
    pets: false
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 2,
    costo: 1.200,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '15490 Atwater Jordan, Livingston California 95334',
    habitaciones: 3,
    baños: 3,
    costo: 4.500,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Apartamento con arquiterctura moderna',
    src: 'https://img.freepik.com/foto-gratis/arquitectura-moderna-apartamentos_1268-14696.jpg?w=1060&t=st=1704990197~exp=1704990797~hmac=dac5147f23e46d5298b500150a9d2acb4880a23b590aba86c0ec2694a4c0f7da',
    descripcion: 'Conéctate con un departamento full equipado y terminaciones de primer nivel',
    ubicacion: 'Withheld By Seller Nicasio, California 94946',
    habitaciones: 3,
    baños: 3,
    costo: 2.000,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Casa con vista al mar',
    src: 'https://img.freepik.com/foto-gratis/hermosa-aldea_1368-6250.jpg?t=st=1704989931~exp=1704990531~hmac=bc4a11f4fd6179e74b681f2874779b25dcc1e67701444374fdd2de5dd027209b',
    descripcion: 'Emplazado en un entorno privilegiado, tranquilo y rodeado de naturaleza',
    ubicacion: '01 Roscoe Fitz Road Johnson City Tennessee 37615',
    habitaciones: 4,
    baños: 2,
    costo: 5.000,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Apartamento de estudio',
    src: 'https://img.freepik.com/foto-gratis/estudio-cocina-hermoso-interior-moderno_651396-1984.jpg?w=1060&t=st=1704986540~exp=1704987140~hmac=0dc3683783e4ca5f2cbb2657b6802bf6b638399f2904ea4d7b89b25f0cb4b5f7',
    descripcion: 'Este apartamento fue diseñado con una distribución eficiente y un look moderno',
    ubicacion: '538 Skyline Avenue, Skyview City,',
    habitaciones: 1,
    baños: 2,
    costo: 1.200,
    smoke: true,
    pets: false
    }
]

function renderCards(propiedades, tipo) {
    const section = document.querySelector(`#${tipo.toLowerCase()} .row`)
    if (!section) {
        return
    }
    
    propiedades.forEach(propiedad => {
        section.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p>
                            <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                            <i class="fas fa-bath"></i> ${propiedad.baños}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toFixed(3)}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                            <i class="fas fa-${propiedad.smoke ? 'smoking' : 'smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas fa-${propiedad.pets ? 'paw' : 'ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
                    </div>
                </div>
            </div>
        `
    })
}

renderCards(propiedades_venta, "venta")