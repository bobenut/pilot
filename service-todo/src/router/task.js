const router = require('../infra/routerWrapper');
const taskService = require('../domain/task/service/taskService');

router.get('/todo/task', ctx => {
    ctx.body = taskService.getTasks();
});
console.log('loaded task router');
  