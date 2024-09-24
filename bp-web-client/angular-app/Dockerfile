FROM --platform=linux/amd64 node:18.19.1-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

FROM --platform=linux/amd64 node:18.19.1-alpine
WORKDIR /app/node-server
COPY --from=build /app/dist/angular-app/ ./
CMD node server/server.mjs
EXPOSE 4000
