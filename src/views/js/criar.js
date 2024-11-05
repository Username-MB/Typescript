document.getElementById('createForm').addEventListener('submit', async function(e){

    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;

    try {
            const response = await fetch('/api/produtos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify( { nome, preco} )
            });

            if(response.ok){
                alert('Produto criado com sucesso!');
                document.getElementById('createForm').reset();
                loadProdutos();   //ATUIALIZAR A LISTA DE PRODUTOS

            }else{
                alert('Erro ao criar Produto.');
            }
    } catch (error) {
        alert('Erro de comunicação com o servidor');
    }
})