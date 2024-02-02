## 介绍

&nbsp;&nbsp;这是一个基于 shadcn-vue + tailwindcss + nuxt3 的基础H5模版，它至少对目前我的情况来说会有益处。希望对你也有所帮助，你可以查看我部署到 github-pages 的演示效果：https://yassine-zhang.github.io/H5BasicTemplate/

如果这个基础项目你觉得确实有点用,可以 fork 下来用在自己的项目，感谢你的支持，有问题请提 issues。

## 本地运行

> 注意下文提到的 bun 与 npm、 pnpm、 yarn 具有相同作用，但远不止这些，它还完全兼容 NodeJS 所有功能，执行速度更快，意在替代 NodeJS 的存在，从23年起受到国外用户广泛使用。

- 安装依赖：`bun install`
- 启动dev服务器：`bun run dev`
- 项目构建：`bun run build`
- 项目构建（使用github-pages预设）：`bun run build:github-pages`
- 构建后预览：`bun run preview`
- 部署到远程gh-pages分支：`bun run deploy`

## 部署

1. 部署到 Github Pages 可直接使用 `bun run deploy`，之后在 github 仓库配置 pages ，
   - `./lib/utils.ts` 文件中 `getRootPath` 函数内需要注意修改生产环境下的名称，这里对标 Github 仓库名称。
     - `return process.env.NODE_ENV === "production" ? "/H5BasicTemplate/" : "/"`;
   - 更多第三方托管部署的方式请参考：https://nuxt.com.cn/deploy
2. 部署到自己服务器可使用 `bun run build` ，将 `.output/public` 文件夹内所有文件传到服务器某一指定位置即可。

## 已添加 shadcn 组件

1. avatar
2. navigation-menu
3. separator

## 项目依赖解读

1. Git 提交时自动整理格式化项目代码：`husky`、`prettier`、`lint-staged`。
2. Icon 图标库：Nuxt3 使用 `lucide-vue-next` 作为默认图标库。
3. Tailwind 样式预览：`tailwind-config-viewer`，本地可通过 `http://localhost:3000/_tailwind/` 地址访问。
4. Wait for me to write more.
