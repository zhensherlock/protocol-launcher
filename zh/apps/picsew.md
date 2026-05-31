---
url: /protocol-launcher/zh/apps/picsew.md
---

# Picsew

[Picsew](https://docs.picsew.app/zh-hans/) 是一款 iOS 截图拼接应用。**Protocol Launcher** 允许您生成 Picsew x-callback-url 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

Picsew 官方 x-callback-url 文档定义了三个动作：`/scroll`、`/vert` 和 `/hori`。此模块只暴露这些官方动作，对应为 `scroll()`、`vert()` 和 `hori()`。

Payload 与官方记录的动作参数保持一致：`in`、`in=latest` 时需要的 `count`、`out`、`watermark`、`border`、`mockup2`、`clean_status`、`remove_scrollbar` 和 `delete_source`。Picsew 已将旧的 `mockup` 参数标记为不可用，因此这里不暴露它。

### 长截图拼接

使用指定图片进行 Picsew 长截图拼接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scroll' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}scroll({
  in: 'recent',
  out: 'save',
  clean_status: 'yes',
  mockup2: 'iphone-14-blue',
  delete_source: 'yes',
})
```

### 竖向拼接

使用指定图片进行 Picsew 竖向拼接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'vert' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}vert({
  in: 'latest',
  count: 3,
  out: 'copy',
  watermark: 'repeat',
})
```

### 横向拼接

使用指定图片进行 Picsew 横向拼接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hori' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}hori({
  in: 'paste',
  out: 'copy',
})
```

## 生成的 URL

```ts
scroll({
  in: 'recent',
  out: 'save',
  clean_status: 'yes',
  mockup2: 'iphone-14-blue',
  delete_source: 'yes',
})
// => 'picsew://x-callback-url/scroll?in=recent&out=save&clean_status=yes&mockup2=iphone-14-blue&delete_source=yes'

vert({
  in: 'latest',
  count: 3,
  out: 'copy',
  watermark: 'repeat',
})
// => 'picsew://x-callback-url/vert?in=latest&count=3&out=copy&watermark=repeat'

hori({
  in: 'paste',
  out: 'copy',
})
// => 'picsew://x-callback-url/hori?in=paste&out=copy'
```

## 官方文档

* [Picsew x-callback-url](https://docs.picsew.app/zh-hans/getting-started/x-callback-url/)
