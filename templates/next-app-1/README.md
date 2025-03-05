# Introduction
This is Nextjs's template using `bun`. It's template generating by `create-frontend-app`.
U can see more template [here](https://github.com/Duc-Developer/init-frontend-app)

## Dependencies
required bun >=1.2.0

| Package                  | Version  |
|--------------------------|----------|
| next                     | 15.2.1   |
| @tanstack/react-query    | ^5.67.2  |
| react                    | ^19.0.0  |
| react-dom                | ^19.0.0  |
| axios                    | ^1.8.2   |

# Quickstart

Create your `.env`. You can refer keys in `.env.example`
```bash
cp .env.example .env
```

For dev
```bash
bun dev
```

For build
```bash
bun build
```

Using docker
```bash
docker compose up -d
```