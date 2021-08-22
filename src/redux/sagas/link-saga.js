import { takeEvery, put, call } from 'redux-saga/effects';
import {
    REQUEST_LINKS, ADD_LINK, REMOVE_LINK, EDIT_LINK, TRY_EDIT_LINK,
    setEditableLink, setLinks, toggleIsFetching, addLinkSuccess,
    editLinkSuccess, removeLinkSuccess, setHasMoreLinks, incrementCurrentPage
} from '../reducers/link-reducer'
import { toggleFormVisibility } from '../reducers/app-reducer'
import { linkApi, notificationApi } from '../../api';
export default function* linksWather() {
    yield takeEvery(REQUEST_LINKS, requestLinksWorker);
    yield takeEvery(ADD_LINK, addLinkWorker);
    yield takeEvery(TRY_EDIT_LINK, tryEditLinkWorker);
    yield takeEvery(EDIT_LINK, editLinkWorker);
    yield takeEvery(REMOVE_LINK, removeLinkWorker);
}
function* requestLinksWorker(action) {
    yield put(toggleIsFetching());
    const links = yield call(getLinks, action.term, action.page);
    if (links.length < 7) yield put(setHasMoreLinks(false))
    yield put(setLinks(links))
    yield put(toggleIsFetching());
}
function* addLinkWorker(action) {
    yield put(toggleIsFetching());
    const newLink = yield call(addLink, action.title, action.url);
    yield put(addLinkSuccess(newLink))
    yield put(toggleIsFetching());
    const notification = { title: 'Notifiation', message: "Add link success" }
    yield call(notify, notification)
}
function* tryEditLinkWorker(action) {
    const { id, title, url } = action;
    yield put(setEditableLink(id, title, url));
    yield put(toggleFormVisibility())
}
function* editLinkWorker(action) {
    yield put(toggleIsFetching());
    const updatedLink = yield call(editLink, action.id, action.title, action.url);
    yield put(editLinkSuccess(updatedLink))
    yield put(toggleIsFetching());
    const notification = { title: 'Notifiation', message: "Update link success" }
    yield call(notify, notification)
}
function* removeLinkWorker(action) {
    yield put(toggleIsFetching());
    const removedLink = yield call(removeLink, action.id);
    yield put(removeLinkSuccess(removedLink))
    yield put(toggleIsFetching());
    const notification = { title: 'Notifiation', message: "Remove link success" }
    yield call(notify, notification)
}
async function getLinks(term, page) {
    return await linkApi.get(page, term)
}
async function addLink(title, url) {
    return await linkApi.add({ title, url })
}
async function editLink(id, title, url) {
    return await linkApi.update({ id, title, url })
}
async function removeLink(id) {
    return await linkApi.remove(id)
}
async function notify(notification) {
    return await notificationApi.notify(notification)
}