type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache{
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;
    constructor(interval: number){
        this.#interval = interval;
        this.#startReapLoop();
    }

    add<T>(key:string, val:T): void{
        this.#cache.set(key, {createdAt: Date.now(), val: val});
    }
    get<T>(key:string): T | undefined{
        return this.#cache.get(key)?.val;
    }

    #startReapLoop() :void{
       this.#reapIntervalId = setInterval(() => { this.#reap()}, this.#interval - 200);
    }

    #reap(): void{
        for(const [key, entry] of this.#cache){
            if(entry.createdAt < Date.now() - this.#interval){
                this.#cache.delete(key);
            }
        }
    }

    stopReapLoop(): void{
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}