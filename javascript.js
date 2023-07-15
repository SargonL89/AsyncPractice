function consultar() {
    const btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {

        const input = document.getElementById('input1').value;
        setTimeout(() => {
            const filtrados = baseDatosFicticia.filter((placa) => {
                return (placa.fabricante.toLocaleLowerCase() === input.toLocaleLowerCase() ||
                placa.marca.toLocaleLowerCase() === input.toLocaleLowerCase() ||
                placa.modelo.toLocaleLowerCase() === input.toLocaleLowerCase() ||
                placa.memoria.toLocaleLowerCase() === input.toLocaleLowerCase() ||
                placa.precio === input)
            });
            mostrarResultados(filtrados)
        }, 2000)
    });
}

function consultar2() {
    const btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        const input = document.getElementById('input1').value;
        Swal.fire({
            title: "Estamos buscando coincidencias en la base de datos que no tenemos...",
            color: "lightblue",
            showConfirmButton: false,
            imageUrl: "/images/blue-black-load.gif",
            imageWidth: 400,
            imageAlt: "Custom image",
            background: "black",
            timer: 3000,
        });
        const filtrados = baseDatosFicticia.filter((placa) => {
            return (placa.fabricante.toLocaleLowerCase() === input.toLocaleLowerCase() ||
            placa.marca.toLocaleLowerCase() === input.toLocaleLowerCase() ||
            placa.modelo.toLocaleLowerCase() === input.toLocaleLowerCase() ||
            placa.memoria.toLocaleLowerCase() === input.toLocaleLowerCase() ||
            placa.precio === input)
        });
        mostrarResultados(filtrados)
    });
}

async function consultar3() {
    try {
        const btn3 = document.getElementById('btn3');
        btn3.addEventListener('click', async () => {
            const respuesta = await buscarElementos();
            return mostrarResultados(respuesta);
        });

    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        throw new Error('No se pudieron obtener los datos de la base de datos');
    }
}

function buscarElementos() {
    const input = document.getElementById('input1').value;

    const filtrados = baseDatosFicticia.filter((placa) => {
        return (placa.fabricante.toLocaleLowerCase() === input.toLocaleLowerCase() ||
        placa.marca.toLocaleLowerCase() === input.toLocaleLowerCase() ||
        placa.modelo.toLocaleLowerCase() === input.toLocaleLowerCase() ||
        placa.memoria.toLocaleLowerCase() === input.toLocaleLowerCase() ||
        placa.precio === input)
    });
    return filtrados;
}

function mostrarResultados(x) {
    const tableBody = document.getElementById('tableBody')

        x.forEach((placa) => {
            tableBody.innerHTML += `<tr>
                <td>${placa.id}</td>
                <td>${placa.fabricante}</td>
                <td>${placa.marca}</td>
                <td>${placa.modelo}</td>
                <td>${placa.memoria}</td>
                <td>${placa.precio}</td>
                </tr>`;
        })
}

consultar();
consultar2();
consultar3();


async function awaitPromises(a) {
    const promise1 = await promesa1(a).then((result) => "Promesa 1 resuelta").catch((error) => "Promesa 1 rechazada"); 
    const promise2 = await promesa2(a).then((result) => "Promesa 2 resuelta").catch((error) => "Promesa 2 rechazada");
    const promise3 = await promesa3(a).then((result) => "Promesa 3 resuelta").catch((error) => "Promesa 3 rechazada");
    const promise4 = await promesa4(a).then((result) => "Promesa 4 resuelta").catch((error) => "Promesa 4 rechazada");
    const promise5 = await promesa5(a).then((result) => "Promesa 5 resuelta").catch((error) => "Promesa 5 rechazada");

    const array = [];
    array.push(promise1, promise2, promise3, promise4, promise5);
    console.log(array)
}

function promesa1(x) {
    return new Promise((resolve, reject) => {
        if (x % 2 === 0) {
            resolve();
        } else {
            reject();
        }
    })
}

function promesa2(x) {
    return new Promise((resolve, reject) => {
        if (x * 5 > 100) {
            resolve();
        } else {
            reject();
        }
    })
}

function promesa3(x) {
    return new Promise((resolve, reject) => {
        if (x * 5 < 100) {
            resolve();
        } else {
            reject();
        }
    })
}

function promesa4(x) {
    return new Promise((resolve, reject) => {
        if (x + 100 >= 200) {
            resolve();
        } else {
            reject();
        }
    })
}

function promesa5(x) {
    return new Promise((resolve, reject) => {
        if (x - 50 < 10) {
            resolve();
        } else {
            reject();
        }
    })
}