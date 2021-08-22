import { ipcMain, Notification } from "electron";
import db from "./db";
import * as shortId from "shortid";

export const registerIpcHandlers = () => {
  ipcMain.handle("notify", (event, notification) => {
    console.log(notification);
    new Notification({
      title: notification.title,
      body: notification.message,
    }).show();
  });
  ipcMain.handle("getLinks", (event, page) => {
    const pageSize = 7;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    let filterCb = () => true;
    console.log(page, startIndex, endIndex);
    // if (title)
    // filterCb = (item) => { return item.toUpperCase().includes(title.toUpperCase()) }
    const links = db
      .get("links")
      .filter(filterCb)
      .sortBy("date")
      .reverse()
      .slice(startIndex, endIndex)
      .value();
    return links;
  });
  ipcMain.handle("addLink", (event, link) => {
    const newLink = { id: shortId.generate(), ...link, date: Date.now() };
    db.get("links").push(newLink).write();
    return newLink;
  });
  ipcMain.handle("updateLink", (event, link) => {
    db.get("links")
      .find({ id: link.id })
      .assign({ ...link })
      .write();
    return link;
  });
  ipcMain.handle("removeLink", (event, id) => {
    const removedLink = db.get("links").filter({ id }).value()[0];
    db.get("links").remove({ id }).write();
    return removedLink;
  });
};
