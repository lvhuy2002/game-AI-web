export class GameObjectManager {
    #layers = [];

    static #instance;

    constructor() {
        let first, second;

        this.#layers = [first = [], second = []];
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new GameObjectManager();
        }
        return this.#instance;
    }

    update() {
        this.#removeRemoveableGameObject();

        this.#layers.forEach(layer => {
            layer.forEach(entity => {
                entity.update();
            });
        });
    }

    addGameObject(gameObject) {
        this.#layers[gameObject.getLayerNumber()].push(gameObject);
    }

    removeGameObjectFromLayer(gameObject, layer) {
        let index = this.#layers[layer].indexOf(gameObject);
        if (index > -1) {
            this.#layers[layer].splice(index, 1);
        }
    }

    getLayers() {
        return this.#layers;
    }

    #removeRemoveableGameObject() {
        for (let i = 0; i < this.#layers.length; i++) { 
            for (let j = 0; j < this.#layers[i].length; j++) {
                if (this.#layers[i][j] != null) {
                    if (this.#layers[i][j].canBeRemoved()) {
                        this.#layers[i].splice(j, 1);
                        j--;
                    }
                }
            }
        }
    }
}