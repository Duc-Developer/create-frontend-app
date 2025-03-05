# Introduction
This project based on `antd` `tailwind` `react-query` and `mobx`, generating by template with `create-frontend-app`
U can see more template [here](https://github.com/Duc-Developer/init-frontend-app)

## Environments

Please using node **>=20.18** & npm **10.8.2**
Create `.env` file inside root folder. U can refer `.env.example`

## Guideline

### 1. Preparation steps before developing this project

You need to pull the source code from the repo. Before starting to code, you need to set up some folders and files to help unify the team's coding standards

Step1: prettier config

<details>
<summary>For Vscode</summary>
If you used vscode, you must config this line bellow in .vscode/setting.json.
If you don't already have it, please create it.

```javascript
{
    ...,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

</details>

### Quick start
```javascript
# for dev
yarn dev
# for build
yarn build
# for preview my build
yarn preview
```
