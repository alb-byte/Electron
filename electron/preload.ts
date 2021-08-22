import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    async sendNotification(notification: any) {
      return ipcRenderer.invoke("notify", notification);
    },
  },
  linkApi: {
    async getById(id: any) {
      return ipcRenderer.invoke("getLinkById", id);
    },
    async get(page: any) {
      return ipcRenderer.invoke("getLinks", page);
    },
    async add(link: any) {
      return ipcRenderer.invoke("addLink", link);
    },
    async update(link: any) {
      return ipcRenderer.invoke("updateLink", link);
    },
    async remove(id: any) {
      return ipcRenderer.invoke("removeLink", id);
    },
  },
});
