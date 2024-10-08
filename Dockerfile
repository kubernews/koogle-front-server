FROM node:16-alpine
WORKDIR /app/
COPY . .

RUN npm install --legacy-peer-deps

#RUN echo ${URL}>/app/.env

RUN npm run build

FROM node:16-alpine
WORKDIR /deploy/
COPY --from=0 /app/.next /deploy/.next
COPY --from=0 /app/package.json /deploy/package.json
COPY --from=0 /app/node_modules /deploy/node_modules
COPY --from=0 /app/public /deploy/public

ENTRYPOINT ["npm", "run", "start"]
