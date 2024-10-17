


let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', () => {
    window.location = 'cadastro.shtml'
})

fetch('../../../src/cachorros.php').then(function(resposta) {
    return resposta.json()
}).then(function(data) {
    populate(data)
})


function populate( data){

    for (let d of data) {
      const container = document.createElement('div');
      container.className = 'bg-[#d0e6c9] rounded-lg shadow-md overflow-hidden';
      
      const imageDiv = document.createElement('div');
      imageDiv.className = 'aspect-video';
      
      const img = document.createElement('img');
      img.alt = 'Dog';
      img.className = 'object-cover w-full h-full';
      img.width = 400;
      img.height = 300;
      img.src = d.img;
      img.style.aspectRatio = '400 / 300';
      img.style.objectFit = 'cover';
      
      imageDiv.appendChild(img);
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'p-4';
      
      const title = document.createElement('h3');
      title.className = 'text-xl font-bold text-[#4a6543]';
      title.textContent = d.nome;
      
      const breed = document.createElement('p');
      breed.className = 'text-[#4a6543]';
      breed.textContent = d.raca;
      
      const description = document.createElement('p');
      description.className = 'text-[#4a6543] mt-2';
      description.textContent = d.descricao;
      
      const button = document.createElement('button');
      button.id = 'Adotar';
      button.className = 'bg-[#8db58c] text-[#4a6543] font-bold py-2 px-4 rounded-md hover:bg-[#6b8b63] focus:ring-2 focus:ring-[#6b8b63] focus:outline-none mt-4';
      button.textContent = 'Adotar';
      
      contentDiv.appendChild(title);
      contentDiv.appendChild(breed);
      contentDiv.appendChild(description);
      contentDiv.appendChild(button);
      
      container.appendChild(imageDiv);
      container.appendChild(contentDiv);
      
      document.body.appendChild(container);
      

    }
}
