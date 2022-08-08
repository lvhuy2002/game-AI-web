export class EntityManager {
    #entities = [];
    #entityCount = 0;

    static #instance;

    constructor() {
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new EntityManager();
        }
        return this.#instance;
    }

    update() {
        this.#entities.forEach(entity => {
            entity.update();
        });

        this.#removeDeadEntities();
    }

    addEntity(entity) {
        this.#entities.push(entity);
        this.#entityCount++;
    }

    removeEntity(entity) {
        let index = this.#entities.indexOf(entity);
        if (index > -1) {
            this.#entities.splice(index, 1);
            this.#entityCount--;
        }
    }

    getEntityCount() {
        return this.#entityCount;
    }

    getEntities() {
        return this.#entities;
    }

    #removeDeadEntities() {
        for (let i = 0; i < this.#entityCount; i++) {
            if (this.#entities[i] != null) {
                if (this.#entities[i].isDead()) {
                    this.#entities.splice(i, 1);
                    i--;
                }
            }
        }
    }
}