document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-editar-faca');
    const estiloInput = document.getElementById('estilo');
    const tamanhoInput = document.getElementById('tamanho');
    const materialLaminaInput = document.getElementById('material-lamina');
    const materialCaboInput = document.getElementById('material-cabo');
    const materialBainhaInput = document.getElementById('material-bainha');
    const imagemInput = document.getElementById('imagem-faca');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const faca = {
            estilo: estiloInput.value,
            tamanho: tamanhoInput.value,
            materialLamina: materialLaminaInput.value,
            materialCabo: materialCaboInput.value,
            materialBainha: materialBainhaInput.value,
        };

        if (imagemInput.files && imagemInput.files[0]) {
            const reader = new FileReader();

            reader.onloadend = function () {
                faca.imagem = reader.result;
                localStorage.setItem('faca', JSON.stringify(faca));
                window.location.href = 'index.html';
            };

            reader.readAsDataURL(imagemInput.files[0]);
        } else {
            localStorage.setItem('faca', JSON.stringify(faca));
            window.location.href = 'index.html';
        }
    });
});
