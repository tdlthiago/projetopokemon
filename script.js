

//pegar a lista do pokemon
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

//pegar o card do pokemon(card principal)
const pokemonsCard = document.querySelector('.pokemon-card')

//usando um forEach para percorrer a lista de pokemos
listaSelecaoPokemons.forEach(pokemon => {

    //usando evento de click
    pokemon.addEventListener('click', () => {

        //pegando a classe  .open la do HTML e removendo essa classe
        const cartaoPoKemonAberto = document.querySelector('.open')
        cartaoPoKemonAberto.classList.remove('open')
        //pegando o id dos pokemos (pelo id da lista e pelo id do card)
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDocartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        //adicionando o cartao principal do pokemon para abrir
        const cartaoPokemonParaAbrir = document.getElementById(idDocartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        //fazendo a logica de troca a cor
        const pokemonAtivoNalistagem = document.querySelector('.ativo')
        pokemonAtivoNalistagem.classList.remove('ativo')

        const pokemonSelecionandoNalistagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionandoNalistagem.classList.add('ativo')

    })
})