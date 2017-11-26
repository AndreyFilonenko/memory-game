"use strict"

export default class ScoresRepository {
	constructor(name, callback) {

		const storage = window.localStorage;
		let liveScores;

		this.getLocalStorage = () => {
			return liveScores || JSON.parse(storage.getItem(name) || "[]");
		};

		this.setLocalStorage = (scores) => {
			storage.setItem(name, JSON.stringify(liveScores = scores));
		};

		if (callback) {
			callback();
		}
	}

	getAllBySize(size) {
		const records = this.getLocalStorage();

		return records.filter(record => {
			if (record.size !== size) {
				return false;
			}
			return true;
		});
	}

	insert(item, callback) {
		const data = this.getLocalStorage();
		data.push(item);
		this.setLocalStorage(data);

		if (callback) {
			callback();
		}
	}
}