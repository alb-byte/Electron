import { all } from 'redux-saga/effects';
import linkWather from './link-saga';

export function* rootWatcher() {
    yield all([linkWather()]);
}