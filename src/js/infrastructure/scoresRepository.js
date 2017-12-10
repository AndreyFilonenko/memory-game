"use strict"

export default class ScoresRepository {
	/**
	 * @param {!string} name Database name
	 * @param {function()} [callback] Called when the Store is ready
	 */
	constructor(name, callback) {

		const storage = window.localStorage;
		let liveScores;

		/**
		 * Read the local scoreslist from localStorage.
		 *
		 * @returns {Array} Current array of scores
		 */
		this.getLocalStorage = () => {
			return liveScores || JSON.parse(storage.getItem(name) || "[]");
		};

		/**
		 * Write the local scoreslist to localStorage.
		 *
		 * @param {Array} todos Array of scores to write
		 */
		this.setLocalStorage = (scores) => {
			storage.setItem(name, JSON.stringify(liveScores = scores));
		};

		if (callback) {
			callback();
		}
	}

	/**
	 * Find all scores by size.
	 *
	 * @param {Number} size Size to match
	 *
	 * @returns	{Array} Array of scores with selected size
	 */
	getAllBySize(size) {
		const records = this.getLocalStorage();

		return records.filter(record => {
			if (record.size !== size) {
				return false;
			}
			return true;
		});
	}

	/**
	 * Insert an item into the Store.
	 *
	 * @param {Object} item Item to insert
	 * @param {function()} [callback] Called when item is inserted
	 */
	insert(item, callback) {
		const data = this.getLocalStorage();
		data.push(item);
		this.setLocalStorage(data);

		if (callback) {
			callback();
		}
	}
}