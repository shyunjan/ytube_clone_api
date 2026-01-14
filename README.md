<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h1>YTube API Service developed using NestJS</h1>
<h3>Use</h3>
<ul>
<li>Fastify</li>
<li>winston</li>
<li>env</li>
<li>rxjs</li>
</ul>

<h3>유튜브 클론 API 프로젝트</h3>
<p>타 프로젝트의 Start-Up용 템플릿 프로젝트로 사용할 수 있음</p>
<ul>
<li>author : shyunjan</li>
<li>email : snhj3827@naver.com 또는 shyunjan@naver.com </li>
</ul>

---

### 1. 기본 정보

- 소스: **[[Github] https://github.com/shyunjan/ytube_clone_api](https://github.com/shyunjan/ytube_clone_api "shyunjan/ytube_clone_api")**
- 배포:

#### 1.1 Setup History

```bash
$ mkdir ytube_clone_api
$ cd ./ytube_clone_api
$ npm init
$ git init
// .gitignore 파일 생성 및 편집
// 해당 파일 내용 참조
...
$ npm i -location=global rimraf typescript ts-node @types/node @swc/cli @swc/core @nestjs/cli @nestjs/schematics webpack webpack-cli
$ npm i -D -link typescript ts-node @types/node
$ tsc --init
// tsconfig.json 편집
// 해당 파일 내용 참조
...
$ npm i -D jest
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata @nestjs/mapped-types
$ npm i --save @nestjs/platform-fastify @fastify/cookie @fastify/request-context @fastify/static fastify
$ npm i --save winston winston-daily-rotate-file nest-winston
$ npm i -D eslint@latest globals typescript-eslint @eslint/js prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier
// .prettierrc 파일 생성 및 편집
// 해당 파일 내용 참조
...
// eslint.config.mjs 파일 생성 및 편집
// 해당 파일 내용 참조
...
$ npm i -D -link rimraf @swc/cli @swc/core @nestjs/cli @nestjs/schematics webpack webpack-cli
$ npm i -D run-script-webpack-plugin webpack-node-externals swc-loader
// nest-cli.json 파일 생성 및 편집
// 해당 파일 내용 참조
...
// webpack-hmr.config.js 파일 생성 및 편집
// 해당 파일 내용 참조
...
// .swcrc 파일 생성 및 편집
// 해당 파일 내용 참조
...

$ git add .
$ git commit -am "initial commit"
$ git branch -M main
$ git remote add origin https://github.com/shyunjan/ytube_clone_api.git
$ git push -u origin main
```

#### 1.2 로컬 실행

```bash
$ npm run start

  .....

```
