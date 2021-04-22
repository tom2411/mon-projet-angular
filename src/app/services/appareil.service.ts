export class AppareilService{
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 1,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 1,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appreilObject) => {
        return appreilObject.id === id;
      }
    );
    return appareil;
  }

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
