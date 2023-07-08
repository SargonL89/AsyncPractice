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

consultar();

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