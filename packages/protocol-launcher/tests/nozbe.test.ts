import { describe, expect, test } from 'vitest'
import { nozbe } from '../src'

describe('nozbe', () => {
  test('goto should return a URL from a Nozbe path', async () => {
    const url = nozbe.goto({
      path: 'teams/zR17yVDEDrpBbi8x/single_tasks',
    })
    expect(url).toBe('nozbe4://goto/teams/zR17yVDEDrpBbi8x/single_tasks')
  })

  test('goto helpers should return documented view URLs', async () => {
    expect(nozbe.gotoPriority({ teamId: 'TeamID' })).toBe('nozbe4://goto/teams/TeamID/priority')
    expect(nozbe.gotoSingleTasks({ teamId: 'zR17yVDEDrpBbi8x' })).toBe(
      'nozbe4://goto/teams/zR17yVDEDrpBbi8x/single_tasks',
    )
    expect(nozbe.gotoQuickAdd({ teamId: 'zR17yVDEDrpBbi8x' })).toBe('nozbe4://goto/teams/zR17yVDEDrpBbi8x/quick_add')
    expect(nozbe.gotoJumpTo({ teamId: 'zR17yVDEDrpBbi8x' })).toBe('nozbe4://goto/teams/zR17yVDEDrpBbi8x/jump_to')
  })

  test('gotoTag should return a URL for a tag', async () => {
    const url = nozbe.gotoTag({
      teamId: 'zR17yVDEDrpBbi8x',
      tagId: '6fxaXuTFwaqd13QV',
    })
    expect(url).toBe('nozbe4://goto/teams/zR17yVDEDrpBbi8x/tags/6fxaXuTFwaqd13QV')
  })

  test('gotoProject should return a URL for a project', async () => {
    const url = nozbe.gotoProject({
      teamId: 'zR17yVDEDrpBbi8x',
      projectId: 'mfdcza541h8g20hz',
    })
    expect(url).toBe('nozbe4://goto/teams/zR17yVDEDrpBbi8x/projects/mfdcza541h8g20hz')
  })

  test('addTask should return the documented URL with required parameters', async () => {
    const url = nozbe.addTask({
      projectId: 'u79rr9gfqszxtn45',
      name: 'Added with url',
      secret: 'abcdef',
    })
    expect(url).toBe(
      'nozbe4://x-callback-url/add_task?project_id=u79rr9gfqszxtn45&name=Added%20with%20url&secret=abcdef',
    )
  })

  test('addTask should include documented optional parameters', async () => {
    const url = nozbe.addTask({
      projectId: 'u79rr9gfqszxtn45',
      name: 'Plan launch',
      isPriority: false,
      responsibleId: '',
      dueAt: 1717200000000,
      isAllDay: true,
      comment: 'Kickoff notes',
      secret: 'abcdef',
      xSuccess: 'sourceapp://done',
      xError: 'sourceapp://error',
    })
    expect(url).toBe(
      'nozbe4://x-callback-url/add_task?project_id=u79rr9gfqszxtn45&name=Plan%20launch&is_priority=false&responsible_id=&due_at=1717200000000&is_all_day=true&comment=Kickoff%20notes&secret=abcdef&x-success=sourceapp%3A%2F%2Fdone&x-error=sourceapp%3A%2F%2Ferror',
    )
  })

  test('updateTask should return the documented URL', async () => {
    const url = nozbe.updateTask({
      taskId: 'abcd1efgh2dcba3j',
      isCompleted: true,
      secret: 'abcdef',
    })
    expect(url).toBe('nozbe4://x-callback-url/update_task?task_id=abcd1efgh2dcba3j&is_completed=true&secret=abcdef')
  })

  test('updateTask should include priority and completed false values', async () => {
    const url = nozbe.updateTask({
      taskId: 'abcd1efgh2dcba3j',
      isPriority: false,
      isCompleted: false,
      secret: 'abcdef',
    })
    expect(url).toBe(
      'nozbe4://x-callback-url/update_task?task_id=abcd1efgh2dcba3j&is_priority=false&is_completed=false&secret=abcdef',
    )
  })

  test('addProject should return the documented URL with required parameters', async () => {
    const url = nozbe.addProject({
      teamId: 'u79rr9gfqszxtn45',
      name: 'Project added with url',
      secret: 'abcdef',
    })
    expect(url).toBe(
      'nozbe4://x-callback-url/add_project?team_id=u79rr9gfqszxtn45&name=Project%20added%20with%20url&secret=abcdef',
    )
  })

  test('addProject should include documented optional parameters', async () => {
    const url = nozbe.addProject({
      teamId: 'u79rr9gfqszxtn45',
      name: 'Private Project',
      description: '',
      isOpen: false,
      color: 'ultramarine',
      secret: 'abcdef',
    })
    expect(url).toBe(
      'nozbe4://x-callback-url/add_project?team_id=u79rr9gfqszxtn45&name=Private%20Project&description=&is_open=false&color=ultramarine&secret=abcdef',
    )
  })
})
