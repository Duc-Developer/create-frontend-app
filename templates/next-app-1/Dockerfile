# 1. Build
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/build build
COPY --from=prerelease /usr/src/app/public public
COPY --from=prerelease /usr/src/app/package.json .
COPY --from=prerelease /usr/src/app/bun.lockb .

# 2. Serve
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
# Set root for nginx
COPY --from=release /usr/src/app/build /usr/share/nginx/html
COPY --from=release /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

USER bun
EXPOSE 3000/tcp
CMD ["bun", "run", "start"]