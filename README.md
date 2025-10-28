# 리액트 퍼블리싱 기초 수업 자료

## 챕터1, 프로젝트 생성

- [Markdown 사용법](https://gist.github.com/ihoneymon/652be052a0727ad59601)
- [Next.js 홈페이지](https://nextjs.org/)

```shell
npx create-next-app@latest
```

![img](https://i.postimg.cc/VkMPZDjS/Kakao-Talk-20251028-160902390.png)

## 챕터2, 프로젝트 기본 세팅

- [강사 리포지터리](https://github.com/SangWon7242/nextjs-basic1)
- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/1bbcf511261c5a09d15d4dd75e041efefd24a83f)

### 깃허브에 프로젝트 업로드

```shell
# git init : git 저장소 초기화
git init

# git remote add : git 저장소의 원격 저장소 추가
git remote add origin '리포지터리 주소'

# git config --global user.name : git 저장소의 사용자 이름 설정
git config --global user.name '이름'

# git config --global user.email : git 저장소의 사용자 이메일 설정
git config --global user.email '이메일'

# git add : git 저장소에 파일 추가
git add .

# git commit : git 저장소에 파일 커밋
git commit -m "세팅"

# git branch : git 저장소의 브랜치 변경
git branch -M main

# git push : git 저장소의 파일을 원격 저장소에 push
git push origin main
```

### 프리티어 관련 세팅

- File - preferences - settings - search - format - default formatter - prettier

## 챕터3, 헤더 컴포넌트를 이용한 헤더 구현
