import { Collection } from "@discordjs/collection";
declare class CacheManager<T> {
    protected cache: Collection<string, T>;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    delete(key: string): void;
}
export default CacheManager;
export { CacheManager };
//# sourceMappingURL=CacheManager.d.ts.map