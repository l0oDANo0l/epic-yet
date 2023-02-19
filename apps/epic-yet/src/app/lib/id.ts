

const keys = {
    id: 'id'
}
function get(key:string) {
    if (!(key in keys)) {
        throw new Error("Invalid key.")
    }
    return window.localStorage.getItem('fp');
}
function store(key:string, val:string) {
    if (!(key in keys)) {
        throw new Error("Invalid key.")
    }
    return window.localStorage.setItem('fp',val);
}
export function getId():string {
    let key = null;
    try {
        key = get(keys.id);
        if (!key) {
            key = window.crypto.randomUUID();
            store(keys.id, window.crypto.randomUUID())
        }
        return key;
    } catch (err) { 
        console.error(err);
    }
    return key || ''
}