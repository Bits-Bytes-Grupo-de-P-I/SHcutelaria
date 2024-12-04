
// // Função para pegar as informações do sorteio

// window.onload = async function (e) {
//         e.preventDefault();

//         try {
//             const response = await fetch('https://sh-cutelaria.onrender.com/rifa/8', {
//                 method: 'GET',
//             });
//             const data = await response.json();
//             console.log(data);
//             document.getElementById('estiloFaca').innerText = data.estilo;
//             document.getElementById('tamanhoFaca').innerText = `${data.tamanho} centímetros`;
//             document.getElementById('materialLamina').innerText = data.material_lamina;
//             document.getElementById('materialCabo').innerText = data.material_cabo;
//             document.getElementById('materialBainha').innerText = data.material_bainha;
//             const dataInicial = data.data.split('T')[0]; // "2024-11-13"
//             const partesData = dataInicial.split('-'); // ["2024", "11", "13"]
//             const dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // "13-11-2024"
//             document.getElementById('dataFinal').innerText = dataFormatada;


//         } catch (error) {
//             alert(error.message);
//         }
//     };


