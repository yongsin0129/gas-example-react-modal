export function getAllTasks () {
  const tasks = SpreadsheetApp.getActiveSheet().getDataRange().getValues()
  tasks.shift() // 移除標頭列
  return tasks
}

export function updateTask (taskId, completed) {
  const sheet = SpreadsheetApp.getActiveSheet()
  const taskRow = parseInt(taskId) + 1  // Google Sheets 的列數從 1 開始

  // 更新任務的完成狀態
  sheet.getRange(taskRow, 3).setValue(completed ? 'Y' : 'N')

  // show info
  hello(`taskId : ${taskId} has been updated`)
}

export function addTask (task) {
  const sheet = SpreadsheetApp.getActiveSheet()
  const lastRow = sheet.getLastRow()
  const newRow = lastRow + 1

  // 將任務新增到試算表中
  sheet.getRange(newRow, 2).setValue(task)
  sheet.getRange(newRow, 3).setValue('N')  // 預設未完成

  // show info
  hello(`taskName : ${task} has been added`)
}

export function deleteTask (taskId) {
  const sheet = SpreadsheetApp.getActiveSheet()
  const taskRow = parseInt(taskId) + 1  // Google Sheets 的列數從 1 開始

  // 刪除任務列
  sheet.deleteRow(taskRow)

  // show info
  hello(`taskId : ${taskId} has been deleted`)
}
