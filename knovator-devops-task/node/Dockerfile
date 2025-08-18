# Multi-stage, lightweight Node.js backend image
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev

# If you have a build step (TypeScript), uncomment:
# COPY . .
# RUN npm run build

FROM node:20-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN addgroup -S nodegrp && adduser -S nodeuser -G nodegrp
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
# If you built artifacts (dist), copy them:
# COPY --from=deps /app/dist ./dist
COPY . .
EXPOSE 3000
USER nodeuser
CMD ["npm", "start"]
