"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
const collection_1 = require("@discordjs/collection");
class CacheManager {
    constructor() {
        this.cache = new collection_1.Collection();
    }
    get(key) {
        return this.cache.get(key);
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    delete(key) {
        this.cache.delete(key);
    }
}
exports.CacheManager = CacheManager;
exports.default = CacheManager;
//# sourceMappingURL=CacheManager.js.map