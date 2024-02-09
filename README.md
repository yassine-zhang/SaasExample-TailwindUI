## 介绍

&nbsp;&nbsp;这是一个基于 tailwindcss + nuxt3 的基础H5模版，它至少对目前我的情况来说会有益处。希望对你也有所帮助。

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
   - 如果你只是做效果演示，可以第三方托管部署，比较方便的是 vercel，我并不推荐 github-pages。
2. 部署到自己服务器，这个时候我会推荐你使用 docker 轻松解决部署耗费较长时间问题。关于使用 bun 构建 Docker 容器的 dockerfile 相关案例如下：（如果不懂请自行查阅资料）

   ```yaml
   # 使用Bun的Alpine镜像
   FROM oven/bun:alpine

   # 设置工作目录
   WORKDIR /app

   # 复制项目文件到工作目录
   COPY . .

   # 更改东八CST-8时区
   RUN apk add tzdata \
   && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
   && echo "Asia/Shanghai" > /etc/timezone

   # 构建项目
   RUN bun run build

   # 设置容器运行时要监听的端口
   EXPOSE 3000

   # 设置一个init程序来处理信号和僵尸进程，运行应用程序
   USER bun
   ENTRYPOINT ["/sbin/tini", "--", "bun", ".output/server/index.mjs"]
   ```

## 项目依赖解读

1. Git 提交时自动整理格式化项目代码：`husky`、`prettier`、`lint-staged`。
2. Tailwind 样式预览：`tailwind-config-viewer`，本地可通过 `http://localhost:3000/_tailwind/` 地址访问。
3. Wait for me to write more.
