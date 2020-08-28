export class Product {

    constructor(public id: number, public name: string, public price: number, public description: string,
                public variations: Array<string>, public mainPhoto: string, public images: Array<string>,
                public quantity?: number) {
    }
}
