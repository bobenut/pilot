const taskEntity = require('../entity/task');

class TaskService {
	constructor() {}

	getTasks() {
	    return taskEntity.getTasks();
	}
}

module.exports = new TaskService();