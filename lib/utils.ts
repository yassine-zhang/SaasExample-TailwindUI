import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { camelize, getCurrentInstance, toHandlerKey } from "vue";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 获取项目根路径<br/>
 * &nbsp;&nbsp;生产环境下根路径为/background-template是因为默认要部署到github pages，而它不以根路径为个人网站，还要加上仓库名。<br/>
 * &nbsp;&nbsp;例如：https://<username>.github.io/<repository-name>/
 * */
export function getRootPath(): string {
  return process.env.NODE_ENV === "production" ? "/H5BasicTemplate/" : "/";
}
