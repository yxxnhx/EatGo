# Eat-go

## 🌱 프로젝트 소개

API를 이용하여 지역과 카테고리를 선택하면 해당하는 레스토랑이 출력되며 리뷰를 남길 수 있는 웹 어플리케이션을 구현하였습니다

## 📎 배포 사이트

https://eatgo.netlify.app/

<br />

## 🚀 프로젝트 실행 방법

```
npm install
npm start
```

<br />

## 👤 사용자 정보

```
id : tester@example.com
password : test
```

<br />

## 📅 프로젝트 기간

22.11.12 ~ 22.12.02

<br />

## 🏹 SKILLS & TOOLS

- React
- Redux
- Jest
- React Testing library
- Emotion

<br />

## 📌 주요 기능

- 로그인
![Dec-04-2022 17-36-25](https://user-images.githubusercontent.com/50559373/205542942-41223cd0-448f-4b52-8413-812335587bb4.gif)

API와 통신하여 accessToken을 받아 로그인할 시에만 리뷰를 남길 수 있는 권한을 주었습니다.
로그인 유지는 localStorage에 accessToken을 저장하여 새로고침을 하여도 로그인이 되도록 하였으며 로그아웃 시, 저장된 accessToken이 삭제되도록 하였습니다

<br />

- 레스토랑 조회
![Dec-04-2022 17-34-50](https://user-images.githubusercontent.com/50559373/205542975-55f61a3e-68d2-4408-8bb9-cc7cee8d2beb.gif)

API를 이용하여 지역과 카테고리를 선택하면 그에 맞는 레스토랑 목록이 조회됩니다.
async await을 이용하여 해당하는 데이터만 맞게 나올 수 있도록 하였습니다.

<br />

- 리뷰 남기기
![Dec-04-2022 17-35-25](https://user-images.githubusercontent.com/50559373/205543021-2af88bb4-147f-4ff5-9142-74a53a6d5da9.gif)

로그인 시에만 리뷰를 남길 수 있도록 삼항연산자를 이용하여 accessToken이 있을 경우에만 ReviewForm이 나오도록 하였습니다.
평점과 리뷰를 남길 수 있으며 리뷰 남기기를 클릭 시 입력한 리뷰가 최상단에 뜨도록 하였습니다.
또한 입력한 리뷰의 평점이 실시간으로 집계 되어 평점에 반영되도록 하였습니다.

<br />

- 슬라이드
![Dec-02-2022 20-56-48](https://user-images.githubusercontent.com/50559373/205543065-5628e490-4349-482b-bb7d-abfb11060594.gif)

라이브러리를 사용하지 않고 순수하게 useState, setInterval을 이용하여 만들었습니다.
2.5초마다 elementLength씩 올라갈 수 있게 하였으며 스타일링은 전체적으로 emotion을 활용하였습니다.
