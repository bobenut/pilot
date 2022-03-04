class TaskEntity {
	constructor() {}

	getTasks() {
        // stage: waiting(代办), doing(办理中), done(完结), pause(暂停)
		return [{
            title: "任务1",
            content: "合理安排作息娱乐时间，要一直做正事那是相当苦逼及磨人的，当我们完成一项工作的时候，不要忘了表扬一下自己，很不错喔，及时有准确，这时可以适当的休息一下，逛逛网页什么的。",
            start: 1631084400,
            end: 1631088000,
            process: 0,
            stage: "waiting"
        },{
            title: "任务2",
            content: "细化一下，老板昨天提的要求，给的任务是什么，哪些是紧急的，那些事重要非紧急的，一件一件的罗列好，固定时间点做什么，严格执行。",
            start: 1631088000,
            end: 1631091600,
            process: 30,
            stage: "doing"
        },{
            title: "任务3",
            content: "快速想一下自己近期的目标是什么，比如是工作完成好一点，质量高一点，工资高一点。那么，就分散到具体的工作项目上。",
            start: 1631091600,
            end: 1631095200,
            process: 100,
            stage: "done"
        }];
	}
}

module.exports = new TaskEntity();