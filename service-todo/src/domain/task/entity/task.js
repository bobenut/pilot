class TaskEntity {
	constructor() {}

	getTasks() {
		return [{
            description: "任务1",
            start: 1631084400,
            end: 1631088000,
        },{
            description: "任务2",
            start: 1631088000,
            end: 1631091600,
        },{
            description: "任务3",
            start: 1631091600,
            end: 1631095200,
        }];
	}
}

module.exports = new TaskEntity();