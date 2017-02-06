export default function StorageService() {
    return {
        read(key) {
            let item = localStorage.getItem(key);
            let result = [];
            try {
                result = JSON.parse(item);
            } catch(error) {
                console.error(error);
            }

            return result;
        },

        save(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
}
