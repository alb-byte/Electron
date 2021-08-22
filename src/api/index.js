const electron = window.electron;

export const linkApi = {
    async getById(id) {
        return electron.linkApi.getById(id);
    },
    async get(page, term) {
        console.log("term in api", term)
        return electron.linkApi.get(page);
    },
    async add(link) {
        return electron.linkApi.add(link);
    },
    async update(link) {
        return electron.linkApi.update(link);
    },
    async remove(id) {
        return electron.linkApi.remove(id);
    }
}
export const notificationApi = {
    async notify(notification) {
        return electron.notificationApi.sendNotification(notification)
    }
}
