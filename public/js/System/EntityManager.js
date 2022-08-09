export class EntityManager {
    #layers = [];

    static #instance;

    constructor() {
        let first, second;

        this.#layers = [first = [], second = []];
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new EntityManager();
        }
        return this.#instance;
    }

    update() {
        this.#removeDeadEntities();

        this.#layers.forEach(layer => {
            layer.forEach(entity => {
                entity.update();
            });
        });
    }

    addEntity(entity) {
        this.#layers[entity.getLayerNumber()].push(entity);
    }

    removeEntityFromLayer(entity, layer) {
        let index = this.#layers[layer].indexOf(entity);
        if (index > -1) {
            this.#layers[layer].splice(index, 1);
        }
    }

    getLayers() {
        return this.#layers;
    }

    #removeDeadEntities() {
        for (let i = 0; i < this.#layers.length; i++) { 
            for (let j = 0; j < this.#layers[i].length; j++) {
                if (this.#layers[i][j] != null) {
                    if (this.#layers[i][j].isDead()) {
                        this.#layers[i].splice(j, 1);
                        j--;
                    }
                }
            }
        }
    }
}