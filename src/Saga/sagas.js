import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'

// here dispatch --> put;

const getData = async () => {
	const url = await fetch('https://jsonplaceholder.typicode.com/users');
	const result = await url.json();
	return result[Math.floor(Math.random() * 11)].name
}

// generator func 1
function* getName() {
	try {
		const userName = yield call(getData);
		yield put({ type: "Update_Name", payload: userName })
	}
	catch (e) {
		console.log(e)
	}
}

// generator func 2

function* getAge() {
	try {
		yield delay(2000)
		yield put({ type: "Update_age", payload: 30 })
	}
	catch (e) {
		console.log(e)
	}
}

// here yield ---> await;

function* WatchSaga() {
	yield takeEvery("NameUpdate", getName)
	yield takeLatest("AgeUpdate", getAge)
}

export default WatchSaga;