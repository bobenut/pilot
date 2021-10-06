const router = require('../infra/routerWrapper');
const taskService = require('../domain/task/service/taskService');

router.get('/tasks', ctx => {
    ctx.body = taskService.getTasks();
});
console.log('loaded task router');
  