import {Collection} from "@discordjs/collection"

class CacheManager<T> {
    protected cache: Collection<string,T > = new Collection()

    public get(key: string) {
        return this.cache.get(key)
    }

    public set(key: string, value: T) {
        this.cache.set(key, value)
    }

    public delete(key: string) {
        this.cache.delete(key)
    }
}

export default CacheManager

export {CacheManager}