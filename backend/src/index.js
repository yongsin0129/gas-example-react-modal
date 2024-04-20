import { onOpen, showModal_todoList } from './UI'
import { addTask, deleteTask, updateTask, getAllTasks } from './tasks'

global.onOpen = onOpen
global.showModal_todoList = showModal_todoList

global.addTask = addTask
global.deleteTask = deleteTask
global.updateTask = updateTask
global.getAllTasks = getAllTasks