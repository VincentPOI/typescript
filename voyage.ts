class Sejour{
  constructor(private _nom: string, private _prix: number){
  }
  get nom():string {
    return this._nom;
  }
  set nom(nom:string) {
    this._nom = nom;
  }
  get prix():number {
    return this._prix;
  }
  set prix(prix:number) {
    this._prix = prix;
  }
}

class SejourService{
  private _sejours:Sejour[] = new Array()
  constructor(){
    this._sejours.push(new Sejour("paris",100))
    this._sejours.push(new Sejour("nyc",500))
    this._sejours.push(new Sejour("rio-de-janeiro",800))
  }

  findSejour(nom:string):Sejour[]{
    return this._sejours.filter(s => s.nom == nom)
  }
}


let sejourService = new SejourService()
let sejoursRecherches = new Array()
sejoursRecherches = sejourService.findSejour("paris")
sejoursRecherches.forEach(s => console.log(s.nom))
