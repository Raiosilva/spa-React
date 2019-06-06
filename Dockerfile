FROM node:10.15.3
ENV INSTALL_PATH /spatwitter
RUN yarn global add create-react-app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN yarn install
CMD ["yarn", "start"]