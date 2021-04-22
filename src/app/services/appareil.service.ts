export class AppareilService{
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll(): void{
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll(): void{
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number): void{
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number): void{
    this.appareils[index].status = 'éteint';
  }

}
