let janelaWelcome = document.getElementById('janelaWelcome')
let janelaMix = document.getElementById('janelaMix')
let janelaAge = document.getElementById('janelaAge')
let janelaShop = document.getElementById('janelaShop')
let janelaEquipments = document.getElementById('janelaEquipments')
let janelaMaps = document.getElementById('janelaMaps')
let janelaXP = document.getElementById('janelaXP')
let janelaBoss = document.getElementById('janelaBoss')
let emojis = document.getElementById('emojis')

let bellumT = document.getElementById('bellum')
let celestoT = document.getElementById('celesto')
let devineT = document.getElementById('devine')
// let armorTable = document.getElementById('Armaduras')
// let shieldTable = document.getElementById('Escudos')

let coinshop = document.getElementById('coinshop')
let timeshop = document.getElementById('timeshop')


//ATAQUE
let arcosS = document.getElementById('ArcosSelecionado')
let cajadoeVarinhaS = document.getElementById('CajadoeVarinhaSelecionado')
let espadasS = document.getElementById('EspadasSelecionado')
let foicesS = document.getElementById('FoicesSelecionado')
let garrasS = document.getElementById('GarrasSelecionado')
let lancasS = document.getElementById('LancasSelecionado')
let machadosS = document.getElementById('MachadosSelecionado')
let martelosS = document.getElementById('MartelosSelecionado')


//DEFESA
let armadurasS = document.getElementById('ArmadurasSelecionado')
let robesS = document.getElementById('RobesSelecionado')
let escudosS = document.getElementById('EscudosSelecionado')
let orbitaisS = document.getElementById('OrbitaisSelecionado')
let braceletesS = document.getElementById('BraceletesSelecionado')
let luvasS = document.getElementById('LuvasSelecionado')
let botasS = document.getElementById('BotasSelecionado')


//ACESSÓRIOS
let aneisS = document.getElementById('AneisSelecionado')
let colaresS = document.getElementById('ColaresSelecionado')
let brincosS = document.getElementById('BrincosSelecionado')
let sheltonsS = document.getElementById('SheltonsSelecionado')


function Estrutura() {
   janelaWelcome.style.display = 'flex'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'none'
}

function MixList() {
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'flex'
   janelaMix.style.width = '90%'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'none'


   bellumT.style.display = 'none'
   celestoT.style.display = 'none'
   devineT.style.display = 'none'
   CloseAside()
}

function mostrarMixBellum() {
   bellumT.style.display = 'block'
   celestoT.style.display = 'none'
   devineT.style.display = 'none'
}

function mostrarMixCelesto() {
   bellumT.style.display = 'none'
   celestoT.style.display = 'block'
   devineT.style.display = 'none'
}

function mostrarMixDevine() {
   bellumT.style.display = 'none'
   celestoT.style.display = 'none'
   devineT.style.display = 'block'
}

function AgingList() {
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'flex'
   janelaShop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'none'
   CloseAside()
}

function ShopList() {
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'flex'
   coinshop.style.display = 'flex'
   timeshop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'none'
   CloseAside()
}

function CoinShop() {
   coinshop.style.display = 'flex'
   timeshop.style.display = 'none'
}

function TimeShop() {
   coinshop.style.display = 'none'
   timeshop.style.display = 'flex'
}

function Equipments() {
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'none'
   coinshop.style.display = 'none'
   timeshop.style.display = 'none'
   janelaEquipments.style.display = 'flex'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'none'

   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
   CloseAside()
}

function Arcos() {
   arcosS.style.display = 'flex'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function CajadoeVarinha() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'flex'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Espadas() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'flex'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Foices() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'flex'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Garras() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'flex'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Lancas() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'flex'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Machados() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'flex'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Martelos() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'flex'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Armaduras() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'flex'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Robes() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'flex'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Escudos() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'flex'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Orbitais() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'flex'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'

}

function Braceletes() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'flex'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'

}

function Luvas() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'flex'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'

}

function Botas() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'flex'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'

}

function Aneis() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'flex'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Colares() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'flex'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'none'
}

function Brincos() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'flex'
   sheltonsS.style.display = 'none'
}

function Sheltons() {
   arcosS.style.display = 'none'
   cajadoeVarinhaS.style.display = 'none'
   espadasS.style.display = 'none'
   foicesS.style.display = 'none'
   garrasS.style.display = 'none'
   lancasS.style.display = 'none'
   machadosS.style.display = 'none'
   martelosS.style.display = 'none'

   armadurasS.style.display = 'none'
   robesS.style.display = 'none'
   escudosS.style.display = 'none'
   orbitaisS.style.display = 'none'
   braceletesS.style.display = 'none'
   luvasS.style.display = 'none'
   botasS.style.display = 'none'

   aneisS.style.display = 'none'
   colaresS.style.display = 'none'
   brincosS.style.display = 'none'
   sheltonsS.style.display = 'flex'
}

function MapList() {
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'none'
   coinshop.style.display = 'none'
   timeshop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'flex'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'none'
   CloseAside()
}

function ExperienceTable() {
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'none'
   coinshop.style.display = 'none'
   timeshop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'flex'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'none'
   CloseAside()
}

function BossList(){
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'none'
   coinshop.style.display = 'none'
   timeshop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'flex'
   emojis.style.display = 'none'
   CloseAside()
}

function Emojis(){
   janelaWelcome.style.display = 'none'
   janelaMix.style.display = 'none'
   janelaAge.style.display = 'none'
   janelaShop.style.display = 'none'
   coinshop.style.display = 'none'
   timeshop.style.display = 'none'
   janelaEquipments.style.display = 'none'
   janelaMaps.style.display = 'none'
   janelaXP.style.display = 'none'
   janelaBoss.style.display = 'none'
   emojis.style.display = 'flex'
   CloseAside()
}

function OpenAside() {
   let openAside = document.getElementById('asideBar')
   openAside.classList.add('activated')
}

function CloseAside() {
   let closeAside = document.getElementById('asideBar')
   closeAside.classList.remove('activated')
}