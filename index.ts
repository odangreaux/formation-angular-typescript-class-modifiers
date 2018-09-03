class Classe1 {
  public prop1: number
  protected prop2: number
  private prop3: number
  public readonly prop4: number

  constructor(prop1: number, prop2: number, prop3: number, prop4: number) {
    this.prop1 = prop1
    this.prop2 = prop2
    this.prop3 = prop3
    this.prop4 = prop4
  }
}

let instance1 = new Classe1(1, 2, 3, 4)
instance1.prop1 = 0
// instance1.prop2 = 0 // erreur de compilation
// instance1.prop3 = 0 // erreur de compilation
// instance1.prop4 = 0 // erreur de compilation

class Classe2 extends Classe1 {
  modifierProp2(nombre: number) {
    this.prop2 = nombre
  }
}

let instance2 = new Classe2(1, 2, 3, 4)
instance2.modifierProp2(0)