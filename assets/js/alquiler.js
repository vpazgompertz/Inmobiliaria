const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2.000,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2.500,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown,CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2.200,
    smoke: false,
    pets: false
    },

    {
    nombre: 'Moderno departamento de lujo',
    src: 'https://img.freepik.com/foto-gratis/representacion-3d-lujo-moderno-dormitorio-suite-tv-armario-vestidor_105762-1941.jpg?w=1380&t=st=1704990116~exp=1704990716~hmac=70d7c5c11ce965ae85003567b9b1faf46b24a60c41bafc1b00cb1e6469225b34',
    descripcion: 'Diseño y calidad en perfecta armonía',
    ubicacion: '2220 S Karsten Creek Rd Stillwater Oklahoma 74074',
    habitaciones: 1,
    baños: 1,
    costo: 1.500,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Vivienda residencial',
    src: 'https://img.freepik.com/foto-gratis/vivienda-mansion-residentail-dwelling-architecture_53876-30337.jpg?t=st=1704989724~exp=1704990324~hmac=faa59f14588f58bd8573100f18b97ad31104f179ebf4caa7996b7e0b06dced9c',
    descripcion: 'Disfruta de sus amplios y luminosos espacios, bien distribuidos pensado en tu bienestar',
    ubicacion: '9622 Us Highway 311 Archdale Carolina Del Norte 27263',
    habitaciones: 4,
    baños: 2,
    costo: 3.500,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Casa ubicada en zona urbana',
    src: 'https://img.freepik.com/fotos-premium/vista-panoramica-casas-ladrillos-modernas_305343-29637.jpg',
    descripcion: 'Esta casa se encuentra en una ubicación privilegiada para disfrutar tu vida a pasos de todo.',
    ubicacion: '13090 Bell Road Lemont Illinois 60439',
    habitaciones: 3,
    baños: 2,
    costo: 2.500,
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
                    <img src="${propiedad.src}" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                        </p>
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

renderCards(propiedades_alquiler, "alquiler")