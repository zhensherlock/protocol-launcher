---
url: /protocol-launcher/zh/apps/wemeet.md
---

# 腾讯会议

[腾讯会议](https://meeting.tencent.com/) 是腾讯云提供的云视频会议服务。**Protocol Launcher** 允许您生成深度链接以打开腾讯会议并加入会议。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开腾讯会议

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'wemeet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'wemeet.'}}open()
```

### 加入会议

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'joinMeeting' : 'wemeet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'wemeet.'}}joinMeeting({
  meetingCode: '123456789',
})
```
