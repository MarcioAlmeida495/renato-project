import './App.css';
import WhatsAppButton from './Components/sendMsg/SendMsg';

function App() {
  return (
    <div className="App">
    <header>
        <h1>Portfolio de [Nome do Tatuador]</h1>
        <nav>
            <ul>
                <li><a href="#bio">Sobre</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section id="bio" class="bio">
        <h2>Sobre o Tatuador</h2>
        <p>Olá, meu nome é [Nome do Tatuador], e sou um tatuador profissional com [X] anos de experiência. Especializo-me em estilos como [realismo, aquarela, etc.]. Cada tatuagem é uma expressão única, e eu trabalho em estreita colaboração com meus clientes para trazer suas visões à vida. Aqui está uma seleção dos meus trabalhos favoritos.</p>
    </section>

    <section id="galeria" class="galeria">
        <h2>Galeria de Tatuagens</h2>
        <div class="grid-container">
            <div class="grid-item"><img src="imagens/tattoo1.jpg" alt="Tatuagem 1" /></div>
            <div class="grid-item"><img src="imagens/tattoo2.jpg" alt="Tatuagem 2"/></div>
            <div class="grid-item"><img src="imagens/tattoo3.jpg" alt="Tatuagem 3"/></div>
            <div class="grid-item"><img src="imagens/tattoo4.jpg" alt="Tatuagem 4"/></div>
            <div class="grid-item"><img src="imagens/tattoo5.jpg" alt="Tatuagem 5"/></div>
            <div class="grid-item"><img src="imagens/tattoo6.jpg" alt="Tatuagem 6"/></div>
        </div>
    </section>

    <section id="contato" class="contato">
        <h2>Entre em Contato</h2>
        <form action="#" method="post">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

            <button type="submit">Enviar</button>
        </form>
        <WhatsAppButton />
    </section>

    <footer>
        <p>&copy; 2024 [Nome do Tatuador] - Todos os direitos reservados.</p>
    </footer>

    </div>
  );
}

export default App;
