# Based on the https://github.com/vercel/next.js/discussions/16995
# Install dependencies only when needed

FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/app
COPY app/package.json app/yarn.lock ./
COPY app/.npmrc ./
RUN --mount=type=cache,id=yarn,sharing=locked,target=/usr/local/share/.cache/yarn yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /usr/app
COPY app .
COPY --from=deps /usr/app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /usr/app

ARG APP_ENV=production
ARG NODE_ENV=production
ARG PORT=3000

ENV APP_ENV=${APP_ENV} \
    NODE_ENV=${NODE_ENV} \
    PORT=${PORT} \
# This allows to access Graphql Playground
APOLLO_PRODUCTION_INTROSPECTION=false

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN mkdir -p /usr/app/.next/cache/images && chown nextjs:nodejs /usr/app/.next/cache/images
VOLUME /usr/app/.next/cache/images

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /usr/app/next.config.js ./
COPY --from=builder /usr/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json

USER nextjs

EXPOSE ${PORT}

CMD ["yarn", "start"]