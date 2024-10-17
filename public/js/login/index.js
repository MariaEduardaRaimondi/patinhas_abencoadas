
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', () => {
    window.location = 'cadastro.shtml'
    })


<div class="flex min-h-screen bg-[#f0f8e6]"> 
  <div class="flex flex-col items-center justify-center w-2/3 p-8">
    <div class="w-full max-w-md p-8 bg-[#d0e6c9] rounded-lg shadow-md">
      <h2 class="mb-6 text-2xl font-bold text-center text-[#4a6543]">FAÇA SEU LOGIN</h2>
      <form id="loginForm" class="space-y-4">
        <div class="space-y-2">
          <label for="name" class="block text-[#4a6543]">Nome:</label>
          <input
            id="name"
            placeholder="Nome"
            class="w-full px-4 py-2 bg-[#8db58c] text-[#4a6543] rounded-md focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
            type="tex<div class="flex min-h-screen bg-[#f0f8e6]">
  <div class="flex flex-col items-center justify-center w-2/3 p-8">
    <div class="w-full max-w-md p-8 bg-[#d0e6c9] rounded-lg shadow-md">
      <h2 class="mb-6 text-2xl font-bold text-center text-[#4a6543]">FAÇA SEU LOGIN</h2>
      <form id="loginForm" class="space-y-4">
        <div class="space-y-2">
          <label for="name" class="block text-[#4a6543]">Nome:</label>
          <input
            id="name"
            placeholder="Nome"
            class="w-full px-4 py-2 bg-[#8db58c] text-[#4a6543] rounded-md focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
            type="text"
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="block text-[#4a6543]">Senha:</label>
          <input
            id="password"
            placeholder="Senha"
            class="w-full px-4 py-2 bg-[#8db58c] text-[#4a6543] rounded-md focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
            type="password"
          />
        </div>
        <div class="space-y-2">
          <label for="confirm-password" class="block text-[#4a6543]">Confirmar senha:</label>
          <input
            id="confirm-password"
            placeholder="Confirmar senha"
            class="w-full px-4 py-2 bg-[#8db58c] text-[#4a6543] rounded-md focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
            type="password"
          />
        </div>
        <div id="error-message" class="text-red-500 text-sm hidden">As senhas não correspondem ou o nome não foi preenchido.</div>
        <div class="flex justify-between space-x-4">
          <button
            type="button"
            class="w-full px-4 py-2 font-bold text-center text-[#4a6543] bg-[#8db58c] rounded-md hover:bg-[#6b8b63] focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
          >
            Já tenho conta
          </button>
          <button
            type="submit"
            class="w-full px-4 py-2 font-bold text-center text-[#4a6543] bg-[#8db58c] rounded-md hover:bg-[#6b8b63] focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
          >
            Entrar
          </button>
        </div>
        <!-- Novo botão para cadastro -->
        <div class="flex justify-center mt-4">
          <button
            id="cadastrar"
            type="button"
            class="w-full px-4 py-2 font-bold text-center text-[#4a6543] bg-[#8db58c] rounded-md hover:bg-[#6b8b63] focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<script>
  // Função de validação de login
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Verifica se o nome está preenchido e as senhas correspondem
    if (!name || password !== confirmPassword) {
      errorMessage.textContent = 'As senhas não correspondem ou o nome não foi preenchido.';
      errorMessage.classList.remove('hidden'); // Exibe a mensagem de erro
    } else {
      errorMessage.classList.add('hidden'); // Esconde a mensagem de erro
      alert(`Bem-vindo, ${name}! Login efetuado com sucesso.`);
    }
  });

  // Redireciona para a página de cadastro quando clicar no botão "Cadastrar"
  let cadastrar = document.getElementById('cadastrar');
  cadastrar.addEventListener('click', () => {
    window.location = 'cadastro.shtml'; // Redireciona para a página de cadastro
  });
</script>t"
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="block text-[#4a6543]">Senha:</label>
          <input
            id="password"
            placeholder="Senha"
            class="w-full px-4 py-2 bg-[#8db58c] text-[#4a6543] rounded-md focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
            type="password"
          />
        </div>
        <div class="space-y-2">
          <label for="confirm-password" class="block text-[#4a6543]">Confirmar senha:</label>
          <input
            id="confirm-password"
            placeholder="Confirmar senha"
            class="w-full px-4 py-2 bg-[#8db58c] text-[#4a6543] rounded-md focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
            type="password"
          />
        </div>
        <div id="error-message" class="text-red-500 text-sm hidden">As senhas não correspondem ou o nome não foi preenchido.</div>
        <div class="flex justify-between space-x-4">
          <button
            type="button"
            class="w-full px-4 py-2 font-bold text-center text-[#4a6543] bg-[#8db58c] rounded-md hover:bg-[#6b8b63] focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
          >
            Já tenho conta
          </button>
          <button
            type="submit"
            class="w-full px-4 py-2 font-bold text-center text-[#4a6543] bg-[#8db58c] rounded-md hover:bg-[#6b8b63] focus:ring-2 focus:ring-[#6b8b63] focus:outline-none"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<script>
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Verifica se o nome está preenchido e as senhas correspondem
    if (!name || password !== confirmPassword) {
      errorMessage.textContent = 'As senhas não correspondem ou o nome não foi preenchido.';
      errorMessage.classList.remove('hidden'); // Exibe a mensagem de erro
    } else {
      errorMessage.classList.add('hidden'); // Esconde a mensagem de erro
      alert(`Bem-vindo, ${name}! Login efetuado com sucesso.`);
    }
  });
</script>
