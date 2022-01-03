// Exercicios js-lab https://github.com/cesartera/js-lab2

function ex(x) {
    console.log('Exercício %s\n', x);
}

// Exercícío 1
ex(1)
function soma() {
    return 10 + 10;
}
console.log(soma());

//Exercício 2
ex(2)
function triangulo() {
    console.log('#\n');
    console.log('##\n');
    console.log('###\n');
    console.log('####\n');
    console.log('#####\n');
}
triangulo()

//
ex(3)
function trianguloFor() {
    let desenho = ''
    for (let i = 1; i <= 5; i++) {
        desenho = desenho + '#'
        console.log(desenho);
    }
}
trianguloFor()

//
ex(4)
function trianguloVaria(x) {
    let desenho = ''
    for (i = 0; i <= x; i++) {
        desenho = desenho + '#'
        console.log(desenho);
    }
}
trianguloVaria(10)

//
ex(5)
function imprimirParametro(x) {
    console.log(x);
}
imprimirParametro('input')

//
ex(6)
function menosUm(num) {
    console.log(num);
}
menosUm(-1)

//
ex(7)
function mostraUltimoElemento(array) {
    console.log(array[array.length - 1]);
}
mostraUltimoElemento([1, 2, 3, 999])

//
ex(8)
function montarFrase(nome, sobrenome, idade) {
    console.log("Meu nome é %s %s e tenho %s anos", nome, sobrenome, idade);
}
montarFrase('Beatriz', 'Tavernaro', 29)

//
ex(9)
function dividirTresNumeros(num1, num2, num3) {
    console.log((num1 / num2) * num3);
}
dividirTresNumeros(10, 5, 2)

//
ex(10)
function calcularArea(altura, largura) {
    console.log(altura * largura);
}
calcularArea(10, 2)

//
ex(11)
function juntarNumero(x, y, z) {
    console.log('%s%s%s', x, y, z);
}
juntarNumero(1, 2, 3)

//
ex(12)
function apresentar() {
    const eu = ['Beatriz', 'Tavernaro', 29, 'Sorocaba'];
    console.log('Olá! \nMe chamo %s %s \nTenho %s anos e moro em %s', eu[0], eu[1], eu[2], eu[3]);
}
apresentar()

//
ex(13)
const aluno = {
    nome: 'Beatriz',
    idade: 29,
    curso: 'Full Stack',
    materias: ['HTML', 'CSS', 'Javascript'],
    mostrarMaterias: function () {
        console.log(this.materias);
    }
}
console.log(aluno.nome);
console.log(aluno.mostrarMaterias()); 
