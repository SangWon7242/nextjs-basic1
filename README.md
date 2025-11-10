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

## 챕터3, 로고, 메뉴 구현, 메뉴를 컴포넌트 기반으로 구현

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/56472b167b0a51cf89b619c6b7dfcec5215d7663)

## 챕터4, 폴더 구조 변경, Image 컴포넌트 사용

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/196c967265921e50047c32abc8d142734bb97959)

## 챕터5, 로컬 폰트 적용

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/36696e90503880b02b20f1d2e6f91145d959a4a1)

## 챕터6, pc 메뉴 완성

- [https://lucide.dev/](https://lucide.dev/)
- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/fb239c5733b3b04a4b179bcc0f8f967ce6221f0f)

```
npm install lucide-react
```

## 챕터7, 헤더 스크롤 이벤트 구현

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/c6faf1394bfe168441a3a92f273e4d7a9a187e44)

## 챕터8, shopBest 섹션 구현, 컴포넌트별로 분리

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/b198c4d440e4c7be29123e5bf322b0b2b42f1f6e)

## 챕터9, 헤더 컴포넌트 분리

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/53e010987796f87916175719b34f57f96b106cd8)

## 챕터10, 테일윈드 커스텀 브레이크 포인트

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/6365929cf87e2550c495644a3531719f2f31c9f0)

## 챕터11, 버튼 컴포넌트에 variant 추가

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/9008e8995920ca42722fb429e2224b6d1edd228b)

## 챕터12, 리뷰 섹션 구현

- [커밋](https://github.com/SangWon7242/nextjs-basic1/commit/d4679557fa19713987494d168a8b29e04cc7174d)

## 11월 10일 수업 정리

### Wifipage.tsx 수정 전

```typescript
export default function Wifipage() {
  return (
    <div className="pt-[130px] max-w-(--site-width) mx-auto">
      <div className="flex">
        <AsideSection />
        <CollectionSection />
      </div>
    </div>
  );
}
```

### Wifipage.tsx 수정 후

```typescript
export default function Wifipage() {
  return (
    <div className="pt-[130px] laptop:max-w-(--site-width) laptop:mx-auto mx-3">
      <div className="flex flex-col laptop:flex-row">
        <AsideSection />
        <CollectionSection />
      </div>
    </div>
  );
}
```

---

### AsideSection.tsx 수정 전

```typescript
export default function AsideSection() {
  return (
    <aside className="min-w-[320px]">
      <div className="sticky top-20">
        <div className="text-[#404040] font-bold">
          <p className="text-[48px]">WiFi</p>
          <p className="text-[26px]">국내 포켓와이파이</p>
        </div>
        <div className="text-[#404040] flex flex-col gap-1 pt-5 pb-10">
          <p>20GB? 무제한?</p>
          <p>어떤 와이파이가 나에게 제일 잘 맞을지</p>
          <p>앨리스가 최고의 선택지를 보여드려요!</p>
        </div>
        <Button href="#" size="xsm" customClass="text-[#4a5052]">
          데이터 속도 및 용량 지표
        </Button>
      </div>
    </aside>
  );
}
```

### AsideSection.tsx 수정 후

```typescript
import Button from "@/components/common/Button/Button";
import { styles } from "./AsideSection.styles";

export default function AsideSection() {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.headerInner}>
        <div className={styles.headerTitle}>
          <p className={styles.headerTitleText}>WiFi</p>
          <p className={styles.headerSubTitleText}>국내 포켓와이파이</p>
        </div>
        <div className={styles.headerDes}>
          <p>20GB? 무제한?</p>
          <p>어떤 와이파이가 나에게 제일 잘 맞을지</p>
          <p>앨리스가 최고의 선택지를 보여드려요!</p>
        </div>
        <Button href="#" size="xsm" customClass="text-[#4a5052]">
          <span className="hidden laptop:inline">데이터 속도 및 용량 지표</span>
          <span className="laptop:hidden">속도 및 용량지표</span>
        </Button>
      </div>
    </div>
  );
}
```

### clsx 방식 도입(AsideSection.styles.ts)

```typescript
export const styles = {
  sectionHeader:
    "section-header laptop:min-w-[320px] laptop:mb-0 laptop:block laptop:text-left w-full flex justify-center text-center mb-7",
  headerInner: "header-inner sticky top-20 laptop:block flex flex-col gap-y-5",
  headerTitle: "header-title text-[#404040] ",
  headerTitleText: "laptop:text-[48px] text-[30px] font-bold",
  headerSubTitleText:
    "laptop:text-[26px] text-[20px] laptop:font-bold font-normal",
  headerDes:
    "header-des text-[#404040] flex flex-col gap-1 pt-5 pb-10 hidden laptop:block",
};
```

# 📊 비교표

| 항목              | @apply (CSS Modules)      | clsx (JS 객체)       |
| ----------------- | ------------------------- | -------------------- |
| **파일 개수**     | 2개 (.tsx + .css)         | 1개 (.tsx만)         |
| **스타일 위치**   | 별도 CSS 파일             | JS/TS 파일 내부      |
| **빌드 결과**     | CSS 파일로 추출           | 인라인 클래스명      |
| **번들 크기**     | CSS 파일 분리 (더 효율적) | JS 번들에 포함       |
| **캐싱**          | CSS 파일 별도 캐싱 가능   | JS와 함께 캐싱       |
| **Hot Reload**    | CSS만 리로드              | 전체 컴포넌트 리렌더 |
| **타입 안전성**   | ❌ (문자열)               | ✅ (TypeScript 지원) |
| **자동완성**      | IDE 플러그인 필요         | ✅ 기본 지원         |
| **조건부 스타일** | 어려움                    | ✅ 쉬움              |
| **스타일 재사용** | CSS 상속 가능             | 객체 spread 가능     |

---

### ItemListSection.tsx 수정 전

```typescript
<div className="w-full mx-auto flex flex-wrap justify-between pb-30"></div>
```

### ItemListSection.tsx 수정 후

```typescript
// 레이아웃을 grid로 변경
<div className="mx-15 pb-30 grid grid-cols-2 tablet:grid-cols-3 gap-4 laptop:gap-6"></div>

// 이미지 너비를 max-w-[303px] -> w-full 로 변경
// 고정 너비로 인해 이미지가 줄지 않은 문제 해결
<Image
  src={list.mainImage}
  alt={list.title}
  className="w-full h-auto transition duration-500 hover:opacity-50"
/>
```

### ReviewSwiper.tsx, 스와이퍼 라이브러리 도입

```typescript
export default function ReviewSwiper() {
  return (
    <Swiper
      loop={true}
      spaceBetween={100}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet duration-300 transition-all",
        bulletActiveClass:
          "swiper-pagination-bullet-active !bg-[#cecece] !w-[20px] !rounded-[10px]",
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {REVIEW_SWIPER_ITEMS.map((item) => (
        <SwiperSlide>
          <div className="p-10 w-full">
            <Image src={item.src} alt="리뷰 이미지" className="w-full" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
```

### 스와이퍼에서 자주 사용하는 속성

- [스와이퍼 공식 문서](https://swiperjs.com/)
- [스와이퍼 API 문서](https://swiperjs.com/swiper-api)

```
- loop: true // 무한 루프
- spaceBetween: 100 // 슬라이드 사이 간격
- centeredSlides: true // 중앙 정렬
- autoplay: { // 자동 슬라이드
  delay: 2500,
  disableOnInteraction: false,
  }
- pagination: { // 페이징
  clickable: true,
  // 페이징 버튼 스타일
  bulletClass: "swiper-pagination-bullet duration-300 transition-all",
  // 활성화된 페이징 버튼 스타일
  bulletActiveClass:
  "swiper-pagination-bullet-active !bg-[#cecece] !w-[20px] !rounded-[10px]",
  }
- modules: [Autoplay, Pagination] // 모듈
- className: "mySwiper" // 클래스명
```
