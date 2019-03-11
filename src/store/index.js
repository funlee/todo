import { observable, action, computed } from 'mobx';

// 单个 Todo
class Todo {
  @observable id = new Date().valueOf();
  @observable task = '';
  @observable complete = false;

  constructor(task) {
    this.task = task;
  }
}

// 定义 store
class Store {
  @observable tasks = [
    {'id':'001' ,'task': '打开 github 官网', 'complete': true },
    {'id':'002' ,'task': '搜索关键词 funlee', 'complete': false },
    {'id':'003' ,'task': 'And Then Follow him', 'complete': false }
  ];
  // 新增
  @action.bound addTask(task) {
    this.tasks.unshift(new Todo(task))
  }
  // 删除
  @action.bound deleteTask(task) {
    this.tasks.remove(task)
  }
  // (!)完成
  @action.bound toggleComplete(taskId) {
    const tasks = this.tasks;
    tasks.forEach(d => {
      if(d.id === taskId) {
        d.complete = !d.complete
      }
    })
    this.tasks = tasks
  }
  // 获取总数
  @computed get amount() {
    return this.tasks.length
  }
  // 获取完成数量
  @computed get completeLength() {
    return this.tasks.filter(task => task.complete).length;
  }

}

export default Store;