# Stage 1: Build React app
FROM node:20-alpine AS build
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN --mount=type=cache,target=/root/.npm npm ci

# Copy all source files
COPY . .

# Fix permissions for react-scripts
RUN chmod +x node_modules/.bin/react-scripts

# Build the app
RUN npm run build

# Stage 2: Nginx runtime
FROM nginx:alpine AS runtime
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
