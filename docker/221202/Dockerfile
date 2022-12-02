#FROM mysql

#ENV MYSQL_ROOT_PASSWORD=1234

#EXPOSE 3306
#========================================
FROM node:16
#16버전의 node
WORKDIR /app
#동작을 할 작업 디렉토리 지정(/app으로)

COPY . /app
#소스코드 '.' 내 위치 '/app' 컨테이너 위치

RUN npm install
#자동으로 npm install로 설치하라는 명령

EXPOSE 8000
#포트 설정

CMD [ "node", "index.js" ]
#중지되었다 실행시킴 .. 계속 실행시킴
